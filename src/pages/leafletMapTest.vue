<template>
  <div class="leafletMapTest">
    <div class="row">
      <div class="col">
        <div id="map"></div>
        <el-button @click="drawPolygon">多边形</el-button>
        <el-button @click="drawCircle">圆</el-button>
        <el-button @click="drawSpot">点</el-button>
        <el-button @click="clean">清除</el-button>
        <el-button @click="openLayer">添加</el-button>
        <el-button @click="closeLayer">移除</el-button>
      </div>
      <div class="slide ver-center" @click="isCollapse = !isCollapse;">
        <i class="fa ta-c ft30 cl-blue pl4 pr4" :class="isCollapse?'fa-angle-double-right':'fa-angle-double-left'"></i>
      </div>
      <div v-if="isCollapse">
        <div class="row" v-for="item in filterList" style="width:200px;margin-left:10px;">
          <div class="col tl filter" :class="{'filter-sel':son.isChecked}" v-for="son in item" @click="son.isChecked=!son.isChecked;">{{son.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import L from 'leaflet';
  import icon from 'leaflet/dist/images/marker-icon.png';
  import iconShadow from 'leaflet/dist/images/marker-shadow.png';
  import statesData from '../lib/bb.js';
  import 'leaflet/dist/leaflet.css';
  const chunk = require('lodash/chunk');

  export default {
    data() {
      return {
        isCollapse: true,
        filter: [{
            name: '户籍人口',
            isChecked: false
          },
          {
            name: '流动人口',
            isChecked: false
          },
          {
            name: '出租屋',
            isChecked: false
          }
        ],
        data: [{
            name: '娄东街道常胜南路39号',
            place: [31.457697, 121.14502]
          },
          {
            name: '沙溪镇直塘光明路5－1号',
            place: [31.547972, 121.014769]
          },
          {
            name: '双凤镇庆丰村三组13号',
            place: [31.54063, 121.04343]
          }
        ],
        colorList: [
          '#FDD2E0',
          '#F4FDCD',
          '#D4EFFA',
          '#A2EEC0',
          '#FDC0C1',
          '#C4D2F9',
          '#BCFCE5',
          '#F9C1F8'
        ]
      };
    },
    computed: {
      filterList() {
        if (this.filter && this.filter.length > 0) {
          let result = chunk(this.filter, 2);
          let lastLen = result[result.length - 1].length;
          if (lastLen < 2) {
            for (let i = 0; i < 2 - lastLen; i++) {
              result[result.length - 1].push('');
            }
          }
          return result;
        }
        return [];
      }
    },
    methods: {
      initMap() {
        this.map = L.map('map', {
          minZoom: 3,
          maxZoom: 18,
          center: [31.457697, 121.14502],
          zoom: 12
          // zoomControl: false,
          // attributionControl: false,
          // crs: L.CRS.EPSG3857
        });
        L.tileLayer(
          'http://webrd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8', {
            subdomains: '1234'
          }
        ).addTo(this.map);
        // L.tileLayer(
        //   "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
        // ).addTo(this.map);
        // function getColor(d) {
        //   return d > 1000
        //     ? '#800026'
        //     : d > 500
        //       ? '#BD0026'
        //       : d > 200
        //         ? '#E31A1C'
        //         : d > 100
        //           ? '#FC4E2A'
        //           : d > 50
        //             ? '#FD8D3C'
        //             : d > 20 ? '#FEB24C' : d > 10 ? '#FED976' : '#FFEDA0';
        // }
        console.log(statesData);
        this.layerGeo = L.geoJson(statesData, {
          style: this.style,
          onEachFeature: this.onEachFeature
        });
        // this.geojson.eachLayer(function (layer) {
        //   layer.bindPopup(layer.feature.attributes.MC);
        // });
        this.greenIcon = L.icon({
          iconUrl: icon,
          shadowUrl: iconShadow,
          iconSize: [30, 50], // size of the icon
          shadowSize: [50, 64], // size of the shadow
          iconAnchor: [15, 50], // point of the icon which will correspond to marker's location
          shadowAnchor: [15, 64], // the same for the shadow
          popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
        });
      },
      style(feature) {
        return {
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7,
          fillColor: this.colorList[
            feature.attributes.FID % this.colorList.length
          ]
        };
      },
      onEachFeature(feature, layer) {
        layer.bindPopup(feature.attributes.MC);
        layer.on({
          mouseover: (e) => {
            var layer = e.target;
            layer.setStyle({
              weight: 3,
              color: '#666',
              fillOpacity: 0.7
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              layer.bringToFront();
            }
          },
          mouseout: (e) => {
            this.layerGeo.resetStyle(e.target);
          },
          // click: (e) => {
          //   console.log(e.target.feature.attributes.MC);
          //   // this.map.fitBounds(e.target.getBounds());
          // }
        });
      },
      openLayer() {
        this.map.addLayer(this.layerGeo);
      },
      closeLayer() {
        this.map.removeLayer(this.layerGeo);
      },
      drawSpot() {
        this.data.forEach(element => {
          L.marker(element.place, {
              icon: this.greenIcon
            })
            .addTo(this.map)
            .bindPopup(element.name);
        });
      },
      drawPolygon() {
        let points = [];
        const polygon = new L.Polygon(points);
        this.map.addLayer(polygon);
        this.map.on('mousedown', e => {
          points.push([e.latlng.lat, e.latlng.lng]);
        });
        this.map.on('mousemove', event => {
          polygon.setLatLngs([...points, [event.latlng.lat, event.latlng.lng]]);
        });
        this.map.on('dblclick', () => {
          if (points.length) {
            this.map.off('mousemove');
            this.map.off('mousedown');
            alert(points);
            points = [];
          }
        });
      },
      drawCircle() {
        var r = 0;
        var i = null;
        var tempCircle = new L.circle();
        this.map.dragging.disable(); //将mousemove事件移动地图禁用
        this.map.on('mousedown', e => {
          i = e.latlng;
        });
        this.map.on('mouseup', e => {
          // r = L.latLng(e.latlng).distanceTo(i); //计算半径
          // L.circle(i, {
          //   radius: r,
          //   color: '#ff0000',
          //   fillColor: '#ff0000',
          //   fillOpacity: 0.5
          // }).addTo(this.map);
          alert('圆心坐标为：' + i + ';半径为：' + r);
          i = null;
          r = 0;
          this.map.dragging.enable();
          this.map.off('mousedown');
          this.map.off('mouseup');
          this.map.off('mousemove');
        });
        this.map.on('mousemove', e => {
          if (i) {
            r = L.latLng(e.latlng).distanceTo(i);
            tempCircle.setLatLng(i);
            tempCircle.setRadius(r);
            tempCircle.setStyle({
              color: '#ff0000',
              fillColor: '#ff0000',
              fillOpacity: 0.2
            });
            this.map.addLayer(tempCircle);
          }
        });
      },
      clean() {
        this.map.eachLayer(layer => {
          if (!layer._container ||
            ('' + jQuery(layer._container).attr('class')).replace(/\s/g, '') !=
            'leaflet-layer'
          ) {
            layer.remove();
          }
        });
      }
    },
    mounted() {
      this.initMap();
    }
  };

</script>

<style lang="less" scoped>
  .leafletMapTest {
    #map {
      width: 100%;
      height: 600px;
    }
    .filter {
      line-height: 25px;
    }
    .filter-sel {
      background: #409fff;
      cursor: pointer;
    }
  }

</style>
