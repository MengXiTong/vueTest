<template>
  <div class="overview tl">
    <div class="head" id="head">
      <img height="35px" class="head-img" alt="" src="@/assets/DP/bw-logo.png">
      <span class="head-title">宝武集团中南钢铁管理驾驶舱</span>
      <div id="head-time" class="head-time ft18">
        <span class="c-blue">2019</span>年
        <span class="c-blue">06</span>月
        <span class="c-blue">19</span>日 星期
        <span class="c-blue">四</span>
      </div>
    </div>
    <div class="content">
      <div class="content-menu">
        <ul class="ml40">
          <li>
            <img width="50px" alt="" src="@/assets/DP/menu1.png">
          </li>
          <li class="mt20">
            <img width="50px" alt="" src="@/assets/DP/menu2.png">
          </li>
          <li class="mt20">
            <img width="50px" alt="" src="@/assets/DP/menu3.png">
          </li>
          <li class="mt20">
            <img width="50px" alt="" src="@/assets/DP/menu4.png">
          </li>
          <li class="mt20">
            <img width="50px" alt="" src="@/assets/DP/menu5.png">
          </li>
          <li class="mt20">
            <img width="50px" alt="" src="@/assets/DP/menu6.png">
          </li>
        </ul>
      </div>
      <div class="content-l ml40" style="width: 550px">
        <div class="box" style="height: 300px; width: 548px">
          <div class="box-title">
            前一日铁量
            <span class="fr" id="qyrtl-date">累计至2021-3-10</span>
          </div>
          <div class="box-lt"></div>
          <div class="box-rt"></div>
          <div class="box-rb"></div>
          <div class="box-lb"></div>
          <div class="box-content">
            <div class="row mt30">
              <div class="col ver-center">
                <img class="qyrtl-img" alt="" src="@/assets/DP/baoshan.png">
                <div class="qyrtl-text ml10">
                  <div>宝山</div>
                  <div>
                    <span class="qyrtl-val">44364</span> 吨
                    <img width="11px" alt="" src="@/assets/DP/up.png">
                  </div>
                </div>
              </div>
              <div class="col ver-center">
                <img class="qyrtl-img" alt="" src="@/assets/DP/qingshan.png">
                <div class="qyrtl-text ml10">
                  <div>青山</div>
                  <div>
                    <span class="qyrtl-val">41811</span> 吨
                    <img width="11px" alt="" src="@/assets/DP/up.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt30">
              <div class="col ver-center">
                <img class="qyrtl-img" alt="" src="@/assets/DP/dongshan.png">
                <div class="qyrtl-text ml10">
                  <div>东山</div>
                  <div>
                    <span class="qyrtl-val">23388</span> 吨
                    <img width="11px" alt="" src="@/assets/DP/up.png">
                  </div>
                </div>
              </div>
              <div class="col ver-center">
                <img class="qyrtl-img" alt="" src="@/assets/DP/meishan.png">
                <div class="qyrtl-text ml10">
                  <div>梅山</div>
                  <div>
                    <span class="qyrtl-val">21235</span> 吨
                    <img width="11px" alt="" src="@/assets/DP/up.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box mt30" style="height: 550px; width: 548px">
          <div class="row mt30">
            <div id="chartId-qsbs" class="col chart-qsbs"></div>
            <div id="chartId-qsqs" class="col chart-qsqs ml20"></div>
          </div>
          <div class="row mt30">
            <div id="chartId-qsds" class="col chart-qsds"></div>
            <div id="chartId-qsms" class="col chart-qsms ml20"></div>
          </div>
        </div>
      </div>
      <div class="content-c flex-1">
        <div class="map">
          <img height="1000px" alt="" src="@/assets/DP/map.png">
          <div class="tc" style="position: absolute; top: 49%; left: 75%;">
            <img width="35px" alt="" src="@/assets/DP/locationBS.png">
            <div class="ft20">宝山</div>
          </div>
          <div class="tc" style="position: absolute; top: 52%; left: 53%;">
            <img width="35px" alt="" src="@/assets/DP/locationQS.png">
            <div class="ft20">青山</div>
          </div>
          <div class="tc" style="position: absolute; top: 73%; left: 56%;">
            <img width="35px" alt="" src="@/assets/DP/locationDS.png">
            <div class="ft20">东山</div>
          </div>
          <div class="tc" style="position: absolute; top: 40%; left: 68%;">
            <img width="35px" alt="" src="@/assets/DP/locationMS.png">
            <div class="ft20">梅山</div>
          </div>
          <div class="ver-center" style="position: absolute; top: 35%; left: 73%;">
            <img width="35px" alt="" src="@/assets/DP/locationRed.png">
            <span class="ft20 ml5">烟宝</span>
          </div>
          <div class="ver-center" style="position: absolute; top: 54%; left: 63%;">
            <img width="35px" alt="" src="@/assets/DP/locationRed.png">
            <span class="ft20 ml5">黄石</span>
          </div>
          <div class="ver-center" style="position: absolute; top: 66%; left: 64%;">
            <img width="35px" alt="" src="@/assets/DP/locationRed.png">
            <span class="ft20 ml5">GJSS</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c9ED1FC tail ft18">
      <ul class="row carousel-label">
        <li class="col tc">
          <img width="100px" alt="" src="@/assets/DP/label-scgk-c.png" class="carousel-label-item">
          <div class="carousel-label-text">生产概况</div>
        </li>
        <li class="col tc">
          <img width="100px" alt="" src="@/assets/DP/label-zdzb.png" class="carousel-label-item">
          <div class="carousel-label-text">重点指标</div>
        </li>
        <li class="col tc">
          <img width="100px" alt="" src="@/assets/DP/label-sbyx.png" class="carousel-label-item">
          <div class="carousel-label-text">设备运行</div>
        </li>
        <li class="col tc">
          <img width="100px" alt="" src="@/assets/DP/label-hgl.png" class="carousel-label-item">
          <div class="carousel-label-text">互功料</div>
        </li>
        <li class="col tc">
          <img width="100px" alt="" src="@/assets/DP/label-nyzb.png" class="carousel-label-item">
          <div class="carousel-label-text">能源指标</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts');

export default {
  mounted() {
    $(window, document).resize(() => {
      this.resize();
    });
    this.resize();
    this.resize();
    this.getData();
  },
  methods: {
    resize() {
      var ratioX = $(window).width() / 1920;
      var ratioY = $(window).height() / 1200;
      console.log(ratioX, ratioY);
      $('body').css({
        transform: 'scale(' + ratioX + ',' + ratioY + ')',
        transformOrigin: 'left top',
        backgroundSize: '100% 100%'
      });
      $('html').css({
        overflow: 'hidden'
      });
    },
    getData() {
      let objQSBS = {
        x: ['1', '2', '3', '4'],
        yb: ['4', '4.1', '4', '3.8'],
        yl: ['3', '3.7', '3', '3.5']
      };
      this.lineBarChart(
        'chartId-qsbs',
        '宝山',
        objQSBS,
        '#FBBF00',
        '#D08802',
        '万吨',
        ['当月实际', '当月计划']
      );
      let objQSQS = {
        x: ['1', '2', '3', '4'],
        yb: ['4', '4.1', '4', '3.8'],
        yl: ['3', '3.7', '3', '3.5']
      };
      this.lineBarChart(
        'chartId-qsqs',
        '青山',
        objQSQS,
        '#5B90F8',
        '#92E0EC',
        '万吨',
        ['当月实际', '当月计划']
      );
      let objQSDS = {
        x: ['1', '2', '3', '4'],
        yb: ['4', '4.1', '4', '3.8'],
        yl: ['3', '3.7', '3', '3.5']
      };
      this.lineBarChart(
        'chartId-qsds',
        '东山',
        objQSDS,
        '#01E8BE',
        '#017DDD',
        '万吨',
        ['当月实际', '当月计划']
      );
      let objQSMS = {
        x: ['1', '2', '3', '4'],
        yb: ['4', '4.1', '4', '3.8'],
        yl: ['3', '3.7', '3', '3.5']
      };
      this.lineBarChart(
        'chartId-qsms',
        '梅山',
        objQSMS,
        '#590AFC',
        '#992AE9',
        '万吨',
        ['当月实际', '当月计划']
      );
    },
    lineBarChart(vid, text, obj, color1, color2, unit, name) {
      let option = {
        title: {
          text: text,
          x: 'left',
          textStyle: {
            color: '#9ED1FC',
            fontSize: 18
          }
        },
        grid: {
          left: '20px',
          right: '0px',
          top: '70px',
          bottom: '0px',
          containLabel: true
        },
        legend: {
          top: '20px',
          right: '0px',
          textStyle: {
            color: '#9ED1FC',
            fontSize: 14
          }
        },
        xAxis: {
          type: 'category',
          data: obj.x,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0B4CA9'
            }
          },
          axisLabel: {
            color: '#01A3E1',
            interval: 0,
            fontSize: 14
          }
        },
        yAxis: {
          name: unit,
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 0, 10, -25],
            color: '#01A3E1'
          },
          nameGap: 8,
          type: 'value',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0B4CA9'
            }
          },
          axisLabel: {
            color: '#01A3E1',
            fontSize: 14
          }
        },
        series: [
          {
            name: name[0],
            type: 'bar',
            data: obj.yb,
            barMaxWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: color1
                  },
                  {
                    offset: 1,
                    color: color2
                  }
                ]),
                barBorderRadius: [5, 5, 0, 0]
              },
              emphasis: {
                barBorderRadius: [5, 5, 0, 0]
              }
            }
          },
          {
            name: name[1],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#17ACC2'
              }
            },
            data: obj.yl
          }
        ]
      };
      const Chart = echarts.init(document.getElementById(vid));
      Chart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.overview {
  width: 1920px;
  height: 1200px;
  overflow: hidden;
  background-image: url(../assets/DP/bg.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
}

.head {
  width: 100%;
  height: 80px;
  background-image: url(../assets/DP/head-bg.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: relative;
  overflow: hidden;
}

.head-img {
  margin-top: 20px;
  margin-left: 20px;
}

.head-title {
  font-size: 40px;
  position: absolute;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  background-image: -webkit-linear-gradient(bottom, #44c4f1, #93d8f9, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.head-time {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}

.content {
  display: flex;
  margin-top: 40px;
}

.box {
  position: relative;
  border: 1px solid #0154be;
  background-color: rgba(9, 49, 107, 0.6);
  font-size: 18px;
}

.box-title {
  line-height: 30px;
  border-bottom: 1px solid #044694;
  padding: 0px 12px;
  color: #9ed1fc;
  overflow: hidden;
}

.box-lt,
.box-rt,
.box-rb,
.box-lb {
  width: 4px;
  height: 4px;
  position: absolute;
  border: 1px solid #00a9fe;
}

.box-lt {
  left: -1px;
  top: -1px;
}

.box-rt {
  right: -1px;
  top: -1px;
}

.box-rb {
  right: -1px;
  bottom: -1px;
}

.box-lb {
  left: -1px;
  bottom: -1px;
}

.box-content {
  padding: 0px 20px;
}

.qyrtl-img {
  width: 70px;
  height: 64px;
}

.qyrtl-text {
  color: #9ed1fc;
  font-size: 18px;
}

.qyrtl-val {
  color: #02efff;
  font-size: 30px;
}

.chart-qsbs,
.chart-qsqs,
.chart-qsds,
.chart-qsms {
  height: 230px;
}

.map {
  position: relative;
  display: inline-block;
}

.tail {
  margin: -90px auto 0px;
  width: 1000px;
  position: relative;
}

.c9ED1FC {
  color: #9ed1fc;
}

/*
*	常用css
*/

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  box-sizing: border-box;
}

.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  width: 100%;
}

.ver-center {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.abs-center {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.overflow-h {
  overflow: hidden;
}

.fr {
  float: right;
}

.fl {
  float: left;
}

.flex-1 {
  flex: 1;
}

.ml5 {
  margin-left: 5px;
}

.ml10 {
  margin-left: 10px;
}

.ml20 {
  margin-left: 20px;
}

.ml40 {
  margin-left: 40px;
}

.mr10 {
  margin-right: 10px;
}

.mr20 {
  margin-right: 20px;
}

.mt30 {
  margin-top: 30px;
}

.mt40 {
  margin-top: 50px;
}

.mt20 {
  margin-top: 20px;
}

.mt10 {
  margin-top: 10px;
}

.mt5 {
  margin-top: 5px;
}

.pt10 {
  padding-top: 10px;
}

.pr20 {
  padding-right: 20px;
}

.pr10 {
  padding-right: 10px;
}

.pl10 {
  padding-left: 10px;
}

.pl20 {
  padding-left: 20px;
}

.w400 {
  width: 400px;
}

.h500 {
  height: 500px;
}

.ft35 {
  font-size: 35px;
}

.ft30 {
  font-size: 30px;
}

.ft25 {
  font-size: 20px;
}

.ft20 {
  font-size: 20px;
}

.ft18 {
  font-size: 18px;
}

.ft15 {
  font-size: 15px;
}

.ft12 {
  font-size: 12px;
}

.ft14 {
  font-size: 14px;
}

.tc {
  text-align: center;
}

.tl {
  text-align: left;
}

.tr {
  text-align: right;
}

.w100 {
  width: 100%;
}

li {
  list-style-type: none;
}
</style>
