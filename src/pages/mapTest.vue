<template>
  <div class="mapTest" style="text-align:left;">大家好我是vae，词曲
    <div id="all-map" class="map"></div>
    <el-input id='tipinput' style="width:600px;margin-top:10px;" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keyword" @keydown.enter.native="search" clearable @clear="search"></el-input>
    <!-- <div class="info">
      <div class="input-item">
        <div class="input-item-prepend">
          <span class="input-item-text" style="width:8rem;">请输入关键字</span>
        </div>
        <input  type="text">
      </div>
    </div> -->
    <div class="input-card">
      <h4>覆盖物群组添加/移除</h4>
      <div class="input-item">
        <input @click="addOverlayGroup" style="margin-right:1rem;" type="button" class="btn" value="添加覆盖物群组" />
        <input @click="removeOverlayGroup" style="margin-right:1rem;" type="button" class="btn" value="移除覆盖物群组" />
        <input id="control" type="button" class="btn" value="路线" @click="showTrafficLayer" />
      </div>
      <div class="input-item">
        <button class="btn" @click="polyEditorOpen" style="margin-right:1rem;">开始编辑</button>
        <button class="btn" @click="polyEditorClose">结束编辑</button>
      </div>
    </div>
    <div id="panel"></div>
  </div>
</template>

<script>
import AMap from 'AMap';

export default {
  data() {
    return {
      map: null,
      isVisible: true,
      trafficLayer: null,
      markers: [],
      placeSearch: [],
      keyword: ''
    };
  },
  methods: {
    GaodeMap() {
      this.map = new AMap.Map('all-map', {
        center: [116.397428, 39.90923], // [纬度，经度]
        resizeEnable: true,
        zoom: 10
      });

      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
        this.map.addControl(new AMap.ToolBar());
        this.map.addControl(new AMap.Scale());
      });

      //实时路况图层
      this.trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      this.trafficLayer.setMap(this.map);

      //画点
      let marker = new AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [116.405467, 39.907761]
      });

      marker.setMap(this.map);

      //批量
      var lnglats = [
        [116.39, 39.92],
        [116.41, 39.93],
        [116.43, 39.91],
        [116.46, 39.93],
        [121.14502, 31.457697],
        [121.014769, 31.547972],
        [121.04343, 31.54063]
      ];
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      for (var i = 0; i < lnglats.length; i++) {
        var lnglat = lnglats[i];
        // 创建点实例
        var marker1 = new AMap.Marker({
          position: new AMap.LngLat(lnglat[0], lnglat[1]),
          icon:
            'https://webapi.amap.com/theme/v1.3/markers/n/mark_b' +
            (i + 1) +
            '.png',
          extData: {
            id: i + 1
          }
        });
        marker1.content = '我是第' + (i + 1) + '个Marker';
        marker1.on('click', e => {
          infoWindow.setContent(e.target.content);
          infoWindow.open(this.map, e.target.getPosition());
        });
        // marker1.emit('click', { target: marker1 });
        this.markers.push(marker1);
      }
      // this.map.setFitView();
      // 创建覆盖物群组，并将 marker 传给 OverlayGroup
      // var overlayGroups = new AMap.OverlayGroup(markers);

      //画多边形
      var path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365]
      ];
      var polygon = new AMap.Polygon({
        path: path,
        strokeColor: '#FF33FF',
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: '#1791fc',
        zIndex: 50
      });
      this.map.add(polygon);
      // 缩放地图到合适的视野级别
      this.map.setFitView([polygon]);
      this.polyEditor = new AMap.PolyEditor(this.map, polygon);
      // this.polyEditor.on('addnode', function(event) {
      //   log.info('触发事件：addnode');
      // });
      // this.polyEditor.on('adjust', function(event) {
      //   log.info('触发事件：adjust');
      // });
      // this.polyEditor.on('removenode', function(event) {
      //   log.info('触发事件：removenode');
      // });
      // this.polyEditor.on('end', function(event) {
      //   log.info('触发事件： end');
      //   // event.target 即为编辑后的多边形对象
      // });

      //关键词搜素
      AMap.service(['AMap.PlaceSearch'], () => {
        //构造地点查询类
        this.placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: '010', // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: this.map, // 展现结果的地图实例
          panel: 'panel', // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
      });
      //输入提示
      var auto = new AMap.Autocomplete({
        input: 'tipinput'
      });
      AMap.event.addListener(auto, 'select', e => {
        this.placeSearch.setCity(e.poi.adcode);
        this.placeSearch.search(e.poi.name); //关键字查询查询
      }); //注册监听，当选中某条记录时会触发
    },
    polyEditorOpen() {
      this.polyEditor.open();
    },
    polyEditorClose() {
      this.polyEditor.close();
    },
    showTrafficLayer() {
      if (this.isVisible) {
        this.trafficLayer.hide();
        this.isVisible = false;
      } else {
        this.trafficLayer.show();
        this.isVisible = true;
      }
    },
    addOverlayGroup() {
      this.map.add(this.markers);
      this.map.setFitView();
    },
    removeOverlayGroup() {
      this.map.remove(this.markers);
      // this.map.clearMap();
    },
    search() {
      console.log('123213213');
      AMap.service(['AMap.PlaceSearch'], () => {
        if (this.keyword) {
          this.placeSearch.search(this.keyword);
        } else {
          this.placeSearch.clear();
        }
      });
    }
  },
  mounted() {
    this.GaodeMap();
  }
};
</script>

<style lang="less" scoped>
.mapTest {
  position: relative;

  /deep/.amap-logo {
    display: none;
  }
  /deep/.amap-copyright {
    opacity: 0;
  }
  .map {
    width: 600px;
    height: 600px;
  }
  .input-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.25rem;
    width: 22rem;
    border-width: 0;
    border-radius: 0.4rem;
    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5);
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 0.75rem 1.25rem;
  }
  .input-item {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
  }
  .input-item:last-child {
    margin-bottom: 0;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-color: transparent;
    background-image: none;
    color: #25a5f7;
    border-color: #25a5f7;
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
    border-radius: 1rem;
    -webkit-appearance: button;
    cursor: pointer;
  }
  .btn:hover {
    color: #fff;
    background: #25a5f7;
  }
  #panel {
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
  }
}
</style>

