<template>
  <div class="TMapTest">
    天地图
    <div id="map"></div>
  </div>
</template>

<script>
import axios from '@/api/axios';
import { loadModules } from 'esri-loader';
// import L from 'leaflet';
// import '@/lib/tdtLayer.js';
import icon from 'leaflet/dist/images/marker-icon.png';

export default {
  data() {
    return {
      token: null,
      mapObj: null,
      eMap: null,
      mapServer: {
        vector:
          'http://10.35.207.185:8080/OneMapServer/rest/services/tcsl_new/MapServer?token=',
        vectorName:
          'http://10.35.207.185:8080/OneMapServer/rest/services/tcslzj_new/MapServer?token=',
        image:
          'http://10.35.207.185:8080/OneMapServer/rest/services/tcyx_new/MapServer?token=',
        imageName:
          'http://10.35.207.185:8080/OneMapServer/rest/services/tcyxzj_new/MapServer?token='
      },
      spatialReferenceValue: 4490, //坐标系,4490（国家天地图）是cgcs2000,4326是WGS1984(GPS)，百度是102100，高德是3857
      defaultPoint: {
        x: 121.125832573659,
        y: 31.4592783844896,
        level: 16
      },
      maxZoom: 19,
      minZoom: 0
    };
  },
  mounted() {
    if (this.token) {
      this.init(this.token);
    } else {
      this.fetchToken();
    }
  },
  methods: {
    fetchToken() {
      axios({
        method: 'get',
        url: '/tmap/RemoteTokenServer',
        params: {
          request: 'getToken',
          username: 'tcdldzww',
          password: 'tcdld12345',
          clientid: 'ref.2.35.34.214',
          expiration: 100,
          format: 'json'
        }
      })
        .then(res => {
          //接口返回多了回车符号
          this.token = res.data.substring(0, res.data.length - 2);
          this.init(this.token);
        })
        .catch(err => {});
    },
    init(token) {
      //加载模块
      loadModules(
        [
          'esri/map',
          'esri/SpatialReference',
          'esri/geometry/Point',
          'esri/graphic',
          'esri/layers/ArcGISDynamicMapServiceLayer',
          'esri/layers/ArcGISTiledMapServiceLayer',
          'esri/layers/GraphicsLayer',
          'esri/symbols/PictureMarkerSymbol'
        ],
        {
          version: '3.29',
          css: true
        }
      ).then(
        ([
          Map,
          SpatialReference,
          Point,
          Graphic,
          ArcGISDynamicMapServiceLayer,
          ArcGISTiledMapServiceLayer,
          GraphicsLayer,
          PictureMarkerSymbol
        ]) => {
          this.mapObj = {
            Map,
            SpatialReference,
            Point,
            Graphic,
            ArcGISDynamicMapServiceLayer,
            ArcGISTiledMapServiceLayer,
            GraphicsLayer,
            PictureMarkerSymbol
          };
          this.eMap = new Map('map', {
            logo: false,
            slider: false,
            showLabels: true,
            maxZoom: this.maxZoom,
            minZoom: this.minZoom
          });
          var layerVector = new ArcGISTiledMapServiceLayer(
            this.mapServer.vector + token,
            {
              id: 'vector_mapServer'
            }
          );
          this.eMap.addLayer(layerVector);
          var layerVectorName = new ArcGISTiledMapServiceLayer(
            this.mapServer.vectorName + token,
            {
              id: 'vectorName_mapServer'
            }
          );
          this.eMap.addLayer(layerVectorName);
          this.eMap.spatialReference = new SpatialReference(
            this.spatialReferenceValue
          );
          // 手动居中
          let point = new Point(
            this.defaultPoint.x,
            this.defaultPoint.y,
            this.eMap.spatialReference
          );
          this.eMap.centerAndZoom(point, this.defaultPoint.level);

          //添加图层
          let layer = new GraphicsLayer({
            id: 'video_layer'
          });
          this.eMap.addLayer(layer);
          // 获取图层
          // const getLayer = function(layerId) {
          //   return this.eMap.getLayer(layerId);
          // };
          // //清理
          // layer.clear();
          //画点
          let graphic = new Graphic(point);
          var symbol = new PictureMarkerSymbol(icon, 25, 40);
          graphic.setSymbol(symbol);
          layer.add(graphic);
        },
        reason => {
          console.log(reason);
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.TMapTest {
  #map {
    width: 100%;
    height: 600px;
  }
}
</style>
