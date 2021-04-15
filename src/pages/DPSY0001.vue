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
      <div id="content-l" class="pl20" style="width: 550px">
        <div class="box" style="height: 500px; width: 548px">
          <div class="box-title">
            生产经营
            <span class="fr" id="scjy-date">累计至2021-3</span>
          </div>
          <div class="box-lt"></div>
          <div class="box-rt"></div>
          <div class="box-rb"></div>
          <div class="box-lb"></div>
          <div class="box-content">
            <div class="row mt30">
              <div class="col overflow-h">
                <img height="60px" class="fl" alt="" src="@/assets/DP/zcze.png">
                <div class="fl scjy-text ml10"></div>
              </div>
              <div class="col overflow-h">
                <img height="60px" class="fl" alt="" src="@/assets/DP/lrze.png">
                <div class="fl scjy-text ml10"></div>
              </div>
            </div>
            <div class="row mt30">
              <div class="col overflow-h">
                <img height="60px" class="fl" alt="" src="@/assets/DP/yyslze.png">
                <div class="fl scjy-text ml10"></div>
              </div>
              <div class="col overflow-h">
                <img height="60px" class="fl" alt="" src="@/assets/DP/lrze.png">
                <div class="fl scjy-text ml10"></div>
              </div>
            </div>
            <div class="row mt30">
              <div id="chartId-yysl" class="col chart-yysl"></div>
              <div id="chartId-lrze" class="col chart-lrze ml10"></div>
            </div>
          </div>
        </div>
        <div class="box mt30" style="height: 500px; width: 548px">
          <div class="box-title">
            生产经营
            <span class="fr" id="scjy2-date"></span>
          </div>
          <div class="box-lt"></div>
          <div class="box-rt"></div>
          <div class="box-rb"></div>
          <div class="box-lb"></div>
          <div class="box-content" style="padding: 0px;">
            <div style="padding: 0 20px;">
              <table class="tbl-scjy mt10" id="tbl-scjy">
                <tr class="tr">
                  <th></th>
                  <th>韶钢</th>
                  <th>鄂钢</th>
                  <th>重钢</th>
                  <th>昆钢</th>
                  <th>单位</th>
                </tr>
              </table>
            </div>
            <div class="scjy2-text mt10 overflow-h ml10" style="position: relative; height: 116px; width: 528px;">
              <ul class="scjy2-carousel">
                <li class="scjy2-box ml10 ver-center fl">
                  <div class="ft30">韶钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-sg"></div>
                  </div>
                </li>
                <li class="scjy2-box ml20 mr10 ver-center fl">
                  <div class="ft30">鄂钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-eg"></div>
                  </div>
                </li>
                <li class="scjy2-box ml10 ver-center fl">
                  <div class="ft30">重钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-cg"></div>
                  </div>
                </li>
                <li class="scjy2-box ml20 mr10 ver-center fl">
                  <div class="ft30">昆钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-kg"></div>
                  </div>
                </li>
                <li class="scjy2-box ml10 ver-center fl">
                  <div class="ft30">韶钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-sg1"></div>
                  </div>
                </li>
                <li class="scjy2-box ml20 mr10 ver-center fl">
                  <div class="ft30">鄂钢</div>
                  <div class="ml10">
                    <div class="ft20">钢产量</div>
                    <div id="scjy-gcl-eg1"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="content-c" class="flex-1 tc">
        <div class="c9ED1FC ml20 ft18 tl">
          粗钢产量（当月累计）
          <div class="overflow-h mt10" id="cgcl-val"></div>
          <div class="mt10" style="font-size: 14px;" id="cgcl-contrast"></div>
        </div>
        <div class="map">
          <img height="550px" alt="" src="@/assets/DP/map.png">
          <div class="tc" style="position: absolute; top: 49%; left: 52%;">
            <img width="15px" alt="" src="@/assets/DP/location1.png">
            <div style="font-size: 12px">重钢</div>
          </div>
          <div class="tc" style="position: absolute; top: 48%; left: 62%;">
            <img width="15px" alt="" src="@/assets/DP/location2.png">
            <div style="font-size: 12px">鄂钢</div>
          </div>
          <div class="tc" style="position: absolute; top: 57%; left: 44%;">
            <img width="15px" alt="" src="@/assets/DP/location3.png">
            <div style="font-size: 12px">昆钢</div>
          </div>
          <div class="tc" style="position: absolute; top: 63%; left: 62%;">
            <img width="15px" alt="" src="@/assets/DP/location4.png">
            <div style="font-size: 12px">韶钢</div>
          </div>
          <div class="chart-cgcl c9ED1FC">
            <div class="tl ft18">年度粗钢产量构成（万吨）</div>
            <div id="chartId-cgcl" style="width: 280px; height: 200px; margin-top: -10px;"></div>
          </div>
        </div>
        <div class="row tl" style="margin: -40px auto 0 auto; padding: 0px 20px; width: 780px;">
          <div class="col">
            <div class="box" style="padding-bottom: 20px;">
              <div class="box-title">铁产量月趋势</div>
              <div class="box-lt"></div>
              <div class="box-rt"></div>
              <div class="box-rb"></div>
              <div class="box-lb"></div>
              <div class="box-content">
                <div id="chartId-tclyqs" class="chart-clyqs"></div>
              </div>
            </div>
          </div>
          <div class="col ml20">
            <div class="box" style="padding-bottom: 20px;">
              <div class="box-title">钢产量月趋势</div>
              <div class="box-lt"></div>
              <div class="box-rt"></div>
              <div class="box-rb"></div>
              <div class="box-lb"></div>
              <div class="box-content">
                <div id="chartId-gclyqs" class="chart-clyqs"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="c9ED1FC w100 ft18 mt20">
          <ul class="row carousel-label">
            <li class="tc col" style="position: relative;">
              <img width="150px" alt="" src="@/assets/DP/label.png" class="carousel-label-item">
              <div class="carousel-label-text">韶钢</div>
              <img height="50px" alt="" src="@/assets/DP/cx1.png" class="carousel-label-icon">
            </li>
            <li class="tc col" style="position: relative;">
              <img width="150px" alt="" src="@/assets/DP/label.png" class="carousel-label-item">
              <div class="carousel-label-text">鄂钢</div>
              <img height="50px" alt="" src="@/assets/DP/cx2.png" class="carousel-label-icon">
            </li>
            <li class="tc col" style="position: relative;">
              <img width="150px" alt="" src="@/assets/DP/label.png" class="carousel-label-item">
              <div class="carousel-label-text">重钢</div>
              <img height="50px" alt="" src="@/assets/DP/cx3.png" class="carousel-label-icon">
            </li>
            <li class="tc col" style="position: relative;">
              <img width="150px" alt="" src="@/assets/DP/label.png" class="carousel-label-item">
              <div class="carousel-label-text">昆钢</div>
              <img height="50px" alt="" src="@/assets/DP/cx4.png" class="carousel-label-icon">
            </li>
          </ul>
        </div>
      </div>
      <div id="content-r" class="mr20" style="width: 550px">
        <div class="box" style="height: 160px; width: 548px">
          <div class="box-title">
            安全生产
            <span class="fr" id="aqsc-date">累计至2021-3-17</span>
          </div>
          <div class="box-lt"></div>
          <div class="box-rt"></div>
          <div class="box-rb"></div>
          <div class="box-lb"></div>
          <div class="box-content">
            <div class="row mt20">
              <div class="col ver-center">
                <img width="75px" alt="" src="@/assets/DP/aqsc.png">
                <div class="ml20">
                  <div class="cFFF aqsc-text"></div>
                  <div class="c6F97B0">
                    <span class="ft35 c02EFFF aqsc-val"></span>天
                  </div>
                </div>
              </div>
              <div class="col ver-center">
                <img width="75px" alt="" src="@/assets/DP/ljsg.png">
                <div class="ml20">
                  <div class="cFFF aqsc-text"></div>
                  <div class="c6F97B0">
                    <span class="ft35 c02EFFF aqsc-val"></span>件
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="box-fade">
          <div class="box mt30" style="height: 308px; width: 548px">
            <div class="box-title">
              能源环保
              <span class="fr" id="nyhb-date">昆钢 2021-3</span>
            </div>
            <div class="box-lt"></div>
            <div class="box-rt"></div>
            <div class="box-rb"></div>
            <div class="box-lb"></div>
            <div class="box-content">
              <div class="row mt20">
                <div class="col ver-center">
                  <img width="60px" alt="" src="@/assets/DP/meitan.png">
                  <div class="ml10">
                    <div class="nyhb-val ft30"></div>
                    <div class="nyhb-text mt5"></div>
                  </div>
                </div>
                <div class="col ver-center">
                  <img width="60px" alt="" src="@/assets/DP/dian.png">
                  <div class="ml10">
                    <div class="nyhb-val ft30"></div>
                    <div class="nyhb-text mt5"></div>
                  </div>
                </div>
              </div>
              <div class="row mt20">
                <div class="col ver-center">
                  <img width="60px" alt="" src="@/assets/DP/nengyuan.png">
                  <div class="ml10">
                    <div class="nyhb-val ft30"></div>
                    <div class="nyhb-text mt5"></div>
                  </div>
                </div>
                <div class="col ver-center">
                  <img width="60px" alt="" src="@/assets/DP/meitan.png">
                  <div class="ml10">
                    <div class="nyhb-val ft30"></div>
                    <div class="nyhb-text mt5"></div>
                  </div>
                </div>
              </div>
              <div class="row mt20">
                <div class="col ver-center">
                  <img width="60px" alt="" src="@/assets/DP/dian.png">
                  <div class="ml10">
                    <div class="nyhb-val ft30"></div>
                    <div class="nyhb-text mt5"></div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>
          <div class="box mt30" style="height: 500px; width: 548px">
            <div class="box-title">
              重点指标
              <span class="fr" id="zdzb-date">昆钢 2021-3</span>
            </div>
            <div class="box-lt"></div>
            <div class="box-rt"></div>
            <div class="box-rb"></div>
            <div class="box-lb"></div>
            <div class="box-content">
              <div id="zdzb-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const echarts = require('echarts');

  export default {
    data() {
      return {
        week: {
          '0': '日',
          '1': '一',
          '2': '二',
          '3': '三',
          '4': '四',
          '5': '五',
          '6': '六'
        }
      };
    },
    mounted() {
      $(window, document).resize(() => {
        this.resize();
      });
      this.resize();
      this.resize();
      let currentDate = new Date();
      let date_day_text =
        currentDate.getFullYear() +
        '-' +
        this.add0(currentDate.getMonth() + 1) +
        '-' +
        currentDate.getDate();
      $('#head-time').html(
        currentDate.getFullYear() +
        '年' +
        this.add0(currentDate.getMonth() + 1) +
        '月' +
        this.add0(currentDate.getDate()) +
        '日 星期' +
        this.week[currentDate.getDay()]
      );
      $('#aqsc-date').text('累计至 ' + date_day_text);
      this.getData();
      setInterval(function () {
        this.getData();
      }, 14400000);
    },
    methods: {
      resize() {
        console.log('执行了');
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
        let SCJYDatas = [{
            ITEM_NAME: '资产总额',
            ITEM_VALUE: 14238453,
            UNIT: '万元',
            DATE_TIME: '2021-04-13'
          },
          {
            ITEM_NAME: '利润总额',
            ITEM_VALUE: 234512,
            UNIT: '万元'
          },
          {
            ITEM_NAME: '营业收入总额',
            ITEM_VALUE: 1258968,
            UNIT: '万元'
          },
          {
            ITEM_NAME: '净资产收益率',
            ITEM_VALUE: 18,
            UNIT: '%'
          }
        ];
        console.log('生产经营', SCJYDatas);
        $('.scjy-text').each(function (index) {
          let value = null;
          if (SCJYDatas[index].ITEM_NAME == '资产总额') {
            value = parseInt(SCJYDatas[index].ITEM_VALUE);
          } else {
            value = SCJYDatas[index].ITEM_VALUE.toFixed(1);
          }
          $(this).html(
            '<div>' +
            SCJYDatas[index].ITEM_NAME +
            '</div><div><span class="scjy-val">' +
            value +
            '</span>' +
            SCJYDatas[index].UNIT +
            '<div>'
          );
        });
        $('#scjy-date').text('累计至' + SCJYDatas[0].DATE_TIME);
        let YSLLineBarDatas = [{
            DATE_TIME: '2',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '1',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '12',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '11',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '10',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '9',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '8',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '7',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '6',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '5',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '4',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '3',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          }
        ];
        console.log('营业收入-柱状线图', YSLLineBarDatas);
        let objYYSL = {};
        objYYSL.x = YSLLineBarDatas.map(item => {
          return this.remove0(item.DATE_TIME);
        });
        objYYSL.y = YSLLineBarDatas.map(function (item) {
          return item.ITEM_VALUE;
        });
        this.lineBarChart(
          'chartId-yysl',
          '营业收入月趋势',
          objYYSL,
          '#FBBF00',
          '#D08802',
          YSLLineBarDatas[0].UNIT
        );
        let LRZELLineBarDatas = [{
            DATE_TIME: '2',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '1',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '12',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '11',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '10',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '9',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '8',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '7',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '6',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '5',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '4',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          },
          {
            DATE_TIME: '3',
            ITEM_VALUE: '1000',
            UNIT: '万元'
          }
        ];
        console.log('利润总额-柱状线图', LRZELLineBarDatas);
        let objLRZE = {};
        objLRZE.x = LRZELLineBarDatas.map(item => {
          return this.remove0(item.DATE_TIME);
        });
        objLRZE.y = LRZELLineBarDatas.map(function (item) {
          return item.ITEM_VALUE;
        });
        this.lineBarChart(
          'chartId-lrze',
          '利润总额月趋势',
          objLRZE,
          '#5B90F8',
          '#92E0EC',
          LRZELLineBarDatas[0].UNIT
        );
        let SCJYTblDatas = [{
            DATE_TIME: '2021-04-13',
            ITEM_NAME: '基地人员数',
            SG_VALUE: 35,
            EG_VALUE: 37,
            CG_VALUE: 42,
            KG_VALUE: 40,
            UNIT: '人',
            SG_DIFFER: 35,
            EG_DIFFER: 40,
            CG_DIFFER: 49,
            KG_DIFFER: 50
          },
          {
            DATE_TIME: '2021-04-13',
            ITEM_NAME: '基地人员数',
            SG_VALUE: 35,
            EG_VALUE: 37,
            CG_VALUE: 42,
            KG_VALUE: 40,
            UNIT: '人',
            SG_DIFFER: 35,
            EG_DIFFER: 40,
            CG_DIFFER: 49,
            KG_DIFFER: 50
          },
          {
            DATE_TIME: '2021-04-13',
            ITEM_NAME: '基地人员数',
            SG_VALUE: 35,
            EG_VALUE: 37,
            CG_VALUE: 42,
            KG_VALUE: 40,
            UNIT: '人',
            SG_DIFFER: 35,
            EG_DIFFER: 40,
            CG_DIFFER: 49,
            KG_DIFFER: 50
          },
          {
            DATE_TIME: '2021-04-13',
            ITEM_NAME: '基地人员数',
            SG_VALUE: 35,
            EG_VALUE: 37,
            CG_VALUE: 42,
            KG_VALUE: 40,
            UNIT: '人',
            SG_DIFFER: 35,
            EG_DIFFER: 40,
            CG_DIFFER: 49,
            KG_DIFFER: 50
          },
          {
            DATE_TIME: '2021-04-13',
            ITEM_NAME: '基地人员数',
            SG_VALUE: 35,
            EG_VALUE: 37,
            CG_VALUE: 42,
            KG_VALUE: 40,
            UNIT: '人',
            SG_DIFFER: 35,
            EG_DIFFER: 40,
            CG_DIFFER: 49,
            KG_DIFFER: 50
          }
        ];
        console.log('生产经营-报表', SCJYTblDatas);
        $('#scjy2-date').text(SCJYTblDatas[0].DATE_TIME);
        $.each(SCJYTblDatas, (i, item) => {
          let html = '<tr>';
          html += '<td>' + item.ITEM_NAME + '</td>';
          html += '<td class="ft25 tbl-scjy-sg tr">' + parseInt(item.SG_VALUE);
          html = this.tblscjyHtmlSplit(html, 'SG_DIFFER', item);
          html += '<td class="ft25 tbl-scjy-eg tr">' + parseInt(item.EG_VALUE);
          html = this.tblscjyHtmlSplit(html, 'EG_DIFFER', item);
          html += '<td class="ft25 tbl-scjy-cg tr">' + parseInt(item.CG_VALUE);
          html = this.tblscjyHtmlSplit(html, 'CG_DIFFER', item);
          html += '<td class="ft25 tbl-scjy-kg tr">' + parseInt(item.KG_VALUE);
          html = this.tblscjyHtmlSplit(html, 'KG_DIFFER', item);
          html += '<td class="tr">' + item.UNIT + '</td>';
          $('#tbl-scjy').append(html);
        });
        const ChartTCL = echarts.init(document.getElementById('chartId-tclyqs'));
        let objTCLLine = {
          x: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3'],
          y: ['510000', '510000', '510000', '510000', '510000', '510000', '510000', '510000', '510000', '510000',
            '510000', '510000', '510000'
          ]
        }
        this.lineChart(
          ChartTCL,
          objTCLLine,
          'rgba(56, 254, 218,.6)',
          'rgba(255, 255, 255,0)',
          '#38FEDA',
          '吨'
        );
        console.log('执行了');
        let SCJYGCLDatas = inInfo.get('SCJYGCLDatas');
        console.log('生产经营-钢产量', SCJYGCLDatas);
        $.each(SCJYGCLDatas, function (i, item) {
          if (item.UNIT_CODE == 'SG') {
            $('#scjy-gcl-sg').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
            $('#scjy-gcl-sg1').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
          } else if (item.UNIT_CODE == 'EG') {
            $('#scjy-gcl-eg').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
            $('#scjy-gcl-eg1').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
          } else if (item.UNIT_CODE == 'CG') {
            $('#scjy-gcl-cg').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
          } else if (item.UNIT_CODE == 'KG') {
            $('#scjy-gcl-kg').html(
              '<span class="scjy2-val">' + item.VALUE.toFixed(1) + '</span>万吨'
            );
          }
        });
        let CGCLDatas = inInfo.get('CGCLDatas');
        console.log('粗钢产量', CGCLDatas);
        let CGCLHtml = '';
        $.each((parseInt(CGCLDatas[0].VALUE) + '').split(''), function (i, item) {
          if (i == 0) {
            CGCLHtml += '<div class="cl-val fl">' + item + '</div>';
          } else if (item == '.') {
            CGCLHtml +=
              '<div class="fl ml5 cFFF" style="font-size: 80px; margin-top: -30px;">.</div>';
          } else {
            CGCLHtml += '<div class="cl-val fl ml10">' + item + '</div>';
          }
        });
        CGCLHtml +=
          '<div style="vertical-align: bottom; display: table-cell; height: 56px">' +
          CGCLDatas[0].UNIT +
          '</div>';
        $('#cgcl-val').html(CGCLHtml);
        //			if(CGCLDatas[0].ITEM_DIFFER==0){
        //				$('#cgcl-contrast').html('');
        //			}else{
        //				if(CGCLDatas[0].ITEM_DIFFER>0){
        //					$('#cgcl-contrast').html('比上月增长'+CGCLDatas[0].ITEM_DIFFER+'<img class="ml5" width="11px" height="6px" alt="" src="../assets/DP/up.png">');
        //				}else{
        //					$('#cgcl-contrast').html('比上月增长'+CGCLDatas[0].ITEM_DIFFER+'<img class="ml5" width="11px" height="6px" alt="" src="../assets/DP/down.png">');
        //				}
        //			}
        $('#cgcl-contrast').html(
          '比上月增长0.6%<img class="ml5" width="11px" height="6px" alt="" src="../assets/DP/up.png">'
        );
        let CGCLPieDatas = inInfo.get('CGCLPieDatas');
        console.log('粗钢产量-饼图', CGCLPieDatas);
        let objCGCL = CGCLPieDatas.map(function (item) {
          return {
            name: item.UNIT_CODE,
            value: item.VALUE
          };
        });
        pieChart('chartId-cgcl', parseInt(CGCLDatas[0].VALUE), objCGCL);
        TCLLineDatas = inInfo.get('TCLLineDatas');
        console.log('铁产量-折线图', TCLLineDatas);
        GCLLineDatas = inInfo.get('GCLLineDatas');
        console.log('钢产量-折线图', GCLLineDatas);
        // ChartTCL = echarts.init(document.getElementById('chartId-tclyqs'));
        ChartGCL = echarts.init(document.getElementById('chartId-gclyqs'));
        NYHBDatas = inInfo.get('NYHBDatas');
        console.log('能源环保', NYHBDatas);
        ZDZBDatas = inInfo.get('ZDZBDatas');
        console.log('重点指标', ZDZBDatas);
        // 标签轮播
        carousel();
        labelTimer = setInterval(() => {
          carousel();
        }, 25000);
        $('.carousel-label-item').each(function (index) {
          $(this).hover(
            function () {
              clearInterval(labelTimer);
              curIndex = index;
              carousel();
            },
            function () {
              clearInterval(labelTimer);
              labelTimer = setInterval(() => {
                carousel();
              }, 25000);
            }
          );
        });
        let AQSCDatas = inInfo.get('AQSCDatas');
        console.log('安全生产', AQSCDatas);
        $('.aqsc-text').each(function (index) {
          $(this).text(AQSCDatas[index].ITEM_NAME);
        });
        $('.aqsc-val').each(function (index) {
          $(this).text(parseInt(AQSCDatas[index].VALUE));
        });
        //			let AQSCTblDatas = inInfo.get('AQSCTblDatas');
        //			console.log('安全生产-报表',AQSCTblDatas);
        //			for(let i=0;i<9;i++){
        //				let html = '';
        //				html += '<tr class="tbl-aqsc-item">';
        //				html += '<td class="pl10">xx子公司'+(i+1)+'</td>';
        //				html += '<td>xx区域</td>';
        //				html += '<td>2021.01.01</td>';
        //				html += '<td>xxxxxx</td>';
        //				html += '<td class="c00F3FE">详情</td>';
        //				html += '</tr>';
        //				$("#tbl-aqsc").append(html);
        //			}
        //			// 表格偶数行变色
        //			$(".tbl-aqsc-item:odd").addClass("tbl-aqsc-tr");
        //			// 表格滚动
        //			tableTimer = tblRoll();
        //			$("#tb-aqsc-div").hover(function(){     //鼠标移入停止滚动
        //		        clearInterval(tableTimer);
        //		    },function(){
        //		        clearInterval(tableTimer);
        //		        tableTimer = tblRoll();
        //		    });
      },
      tblscjyHtmlSplit(html, key, item) {
        if (item[key] == 0) {
          html +=
            '<img class="tbl-scjy-icon" alt="" src="../assets/DP/flat.png"></td>';
        } else {
          if (item[key] > 0) {
            html +=
              '<img class="tbl-scjy-icon" alt="" src="../assets/DP/up.png"></td>';
          } else {
            html +=
              '<img class="tbl-scjy-icon" alt="" src="../assets/DP/down.png"></td>';
          }
        }
        return html;
      },
      add0(m) {
        return m < 10 ? '0' + m : m;
      },
      remove0(m) {
        return m.replace(/^0/, '');
      },
      getLastMonth(date, isText) {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (month == 0) {
          year = year - 1;
          month = 12;
        }
        if (isText) {
          return year + '-' + month;
        }
        return year + add0(month);
      },
      chunk(array, size) {
        if (!array || !Array.isArray(array) || array.length <= 0) {
          return [];
        } else {
          var result = [];
          var i = 0;
          while (true) {
            let list = array.slice(i, size + i);
            let lastLen = list.length;
            if (lastLen < size) {
              for (let j = 0; j < size - lastLen; j++) {
                list.push('');
              }
            }
            result.push(list);
            i += size;
            if (i >= array.length) {
              break;
            }
          }
          return result;
        }
      },
      carousel() {
        if (curIndex > $('.carousel-label-item').length - 1) {
          curIndex = 0;
        }
        $('.carousel-label-item').each(function (index) {
          if (curIndex == index) {
            $(this).attr('src', '../assets/DP/label-check.png');
          } else {
            $(this).attr('src', '../assets/DP/label.png');
          }
        });
        $('.carousel-label-text').each(function (index) {
          if (curIndex == index) {
            $(this).css({
              'font-size': '25px',
              color: '#F7B700'
            });
          } else {
            $(this).css({
              'font-size': '18px',
              color: '#9ED1FC'
            });
          }
        });
        //切换标签后执行的操作
        let objTCLLine = {};
        let curTCLLineDatas = TCLLineDatas.filter(function (item) {
          return item.UNIT_CODE == cxKey[curIndex];
        });
        objTCLLine.x = curTCLLineDatas.map(function (item) {
          return remove0(item.DATE_TIME);
        });
        objTCLLine.y = curTCLLineDatas.map(function (item) {
          return item.ITEM_VALUE;
        });
        let objGCLLine = {};
        let curGCLLineDatas = GCLLineDatas.filter(function (item) {
          return item.UNIT_CODE == cxKey[curIndex];
        });
        objGCLLine.x = curGCLLineDatas.map(function (item) {
          return remove0(item.DATE_TIME);
        });
        objGCLLine.y = curGCLLineDatas.map(function (item) {
          return item.ITEM_VALUE;
        });
        lineChart(
          ChartTCL,
          objTCLLine,
          'rgba(56, 254, 218,.6)',
          'rgba(255, 255, 255,0)',
          '#38FEDA',
          curTCLLineDatas[0].UNIT
        );
        lineChart(
          ChartGCL,
          objGCLLine,
          'rgba(100, 58, 254,.6)',
          'rgba(255, 255, 255,0)',
          '#643AFE',
          curGCLLineDatas[0].UNIT
        );
        $('#box-fade').fadeOut();
        $('#nyhb-date').text(cxName[curIndex] + '  ' + NYHBDatas[0].DATE_TIME);
        let curNYHBDatas = NYHBDatas.filter(function (item) {
          return item.UNIT_CODE == cxKey[curIndex];
        });
        $('.nyhb-text').each(function (index) {
          $(this).text(curNYHBDatas[index].ITEM_NAME);
        });
        $('.nyhb-val').each(function (index) {
          $(this).text(parseInt(curNYHBDatas[index].VALUE));
        });
        $('#zdzb-date').text(cxName[curIndex] + '  ' + ZDZBDatas[0].DATE_TIME);
        let curZDZBDatas = ZDZBDatas.filter(function (item) {
          return item.UNIT_CODE == cxKey[curIndex];
        });
        let curZDZBDatasChunk = chunk(curZDZBDatas, 2);
        let htmlAll = '';
        let zdzbIndex = 0;
        curZDZBDatasChunk.forEach(function (element) {
          let html = '<div class="row mt40">';
          element.forEach(function (item) {
            ++zdzbIndex;
            if (item) {
              html += '<div class="col ver-center">';
              html +=
                '<img width="85px" alt="" src="../assets/DP/pie' +
                zdzbIndex +
                '.png">';
              html += '<div class="ml10">';
              html += '<div class="zdzb-text">' + item.ITEM_NAME + '</div>';
              html +=
                '<div class="zdzb-val ft30">' +
                parseInt(item.VALUE) +
                '<span class="c6F97B0 ft18">' +
                item.UNIT +
                '</span></div>';
              html += '</div>';
              html += '</div>';
            } else {
              html += '<div class="col">';
              html += '</div>';
            }
          });
          html += '</div>';
          htmlAll += html;
        });
        $('#zdzb-content').html(htmlAll);
        //	$('.zdzb-text').each(function(index){
        //		console.log(curZDZBDatas[index].ITEM_NAME);
        //		$(this).text(curZDZBDatas[index].ITEM_NAME)
        //	});
        //	$('.zdzb-val').each(function(index){
        //		$(this).html(parseInt(curZDZBDatas[index].VALUE)+'<span class="c6F97B0 ft18">万吨</span>');
        //	});
        $('#box-fade').fadeIn(3000);
        curIndex++;
      },
      lineBarChart(vid, text, obj, color1, color2, unit) {
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
            left: '0px',
            right: '0px',
            top: '60px',
            bottom: '0px',
            containLabel: true
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
              padding: [0, 0, 0, -25],
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
          series: [{
            type: 'bar',
            data: obj.y,
            barMaxWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
          }]
        };
        const Chart = echarts.init(document.getElementById(vid));
        Chart.setOption(option);
      },
      pieChart(vid, text, obj) {
        let option = {
          title: {
            text: text,
            x: 'center',
            y: 'center',
            textStyle: {
              color: '#9ED1FC',
              fontSize: 18
            }
          },
          grid: {
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            containLabel: true
          },
          legend: {
            bottom: '0px',
            left: 'center',
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
              color: '#9ED1FC',
              fontSize: 14
            }
          },
          series: [{
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter: '{d}%',
              color: '#01A3E1',
              fontSize: 14
            },
            data: obj,
            itemStyle: {
              normal: {
                color: function (params) {
                  // 给出颜色组
                  var colorList = ['#506ECE', '#3AE3BC', '#FAD972', '#F88582'];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        };
        const Chart = echarts.init(document.getElementById(vid));
        Chart.setOption(option);
      },
      lineChart(Chart, obj, color1, color2, color3, unit) {
        let option = {
          grid: {
            left: '0px',
            right: '0px',
            top: '40px',
            bottom: '0px',
            containLabel: true
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
                color: '#818495'
              }
            },
            axisLabel: {
              color: '#fff',
              interval: 0,
              fontSize: 14
            }
          },
          yAxis: {
            name: unit,
            nameTextStyle: {
              fontSize: 12,
              padding: [0, 0, 0, -25],
              color: '#fff'
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
                color: '#818495'
              }
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14
            }
          },
          series: [{
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color1
                },
                {
                  offset: 1,
                  color: color2
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: obj.y,
            itemStyle: {
              normal: {
                color: color3
              }
            },
            markPoint: {
              data: [{
                  coord: [0, obj.y[0]],
                  value: obj.y[0],
                  name: '去年'
                },
                {
                  coord: [obj.x.length - 1, obj.y[obj.x.length - 1]],
                  value: obj.y[obj.x.length - 1],
                  name: '今年'
                }
              ]
            }
          }]
        };
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

  .c-blue {
    color: #00a9fe;
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

  .scjy-text {
    color: #9ed1fc;
    font-size: 18px;
  }

  .scjy-val {
    color: #02efff;
    font-size: 25px;
  }

  .chart-yysl,
  .chart-lrze {
    height: 230px;
  }

  .tbl-scjy {
    width: 100%;
    color: #9ed1fc;
    line-height: 50px;
    text-align: left;
  }

  .tbl-scjy-icon {
    width: 11px;
    height: 6px;
    margin-left: 4px;
  }

  .tbl-scjy-sg {
    color: #02efff;
  }

  .tbl-scjy-eg {
    color: #3de3bd;
  }

  .tbl-scjy-zg {
    color: #fbda73;
  }

  .tbl-scjy-kg {
    color: rgb(247, 183, 0);
  }

  .scjy2-text {
    color: #9ed1fc;
  }

  .scjy2-val {
    color: #02efff;
    font-size: 25px;
  }

  .scjy2-box {
    background-image: url(../assets/DP/box.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 244px;
    padding-left: 30px;
    height: 116px;
  }

  .scjy2-carousel {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1644px;
    animation: mymove 30s infinite;
  }

  .scjy2-carousel:hover {
    animation-play-state: paused;
  }

  @keyframes mymove {
    0%,
    20% {
      margin-left: 0;
    }
    40%,
    70% {
      margin-left: -528px;
    }
    90%,
    100% {
      margin-left: -1056px;
    }
  }

  .nyhb-text {
    color: #6f97b0;
  }

  .nyhb-val {
    color: #02efff;
  }

  .zdzb-text {
    color: #fff;
  }

  .zdzb-val {
    color: #02efff;
  }

  .c6F97B0 {
    color: #6f97b0;
  }

  .c02EFFF {
    color: #02efff;
  }

  .c01A3E1 {
    color: #01a3e1;
  }

  .c9ED1FC {
    color: #9ed1fc;
  }

  .c00F3FE {
    color: #00f3fe;
  }

  .cFFF {
    color: #fff;
  }

  .map {
    margin-top: -40px;
    margin-left: 150px;
    position: relative;
    display: inline-block;
  }

  .cl-val {
    background-image: url(../assets/DP/data-bg.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 8px 12px;
    color: #fff;
    font-size: 35px;
  }

  .chart-cgcl {
    position: absolute;
    left: -100px;
    bottom: 60px;
  }

  .chart-clyqs {
    height: 200px;
    width: 100%;
  }

  .carousel-label {
    margin: 0 auto;
  }

  .carousel-label-icon {
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translate(-50%, 0);
  }

  .tb-aqsc-div {
    margin-top: 37px;
    overflow: hidden;
    height: 280px;
  }

  .tbl-aqsc {
    width: 100%;
    line-height: 40px;
    text-align: left;
    padding: 0px 10px;
  }

  .tbl-aqsc-h {
    background: rgba(0, 151, 255, 0.35);
  }

  .tbl-aqsc-tr {
    background: rgba(24, 106, 148, 0.2);
  }

  /*
*	锟斤拷锟斤拷css
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

  .ml20 {
    margin-left: 20px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .ml5 {
    margin-left: 5px;
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

  .ml10 {
    margin-left: 10px;
  }

  .mr10 {
    margin-right: 10px;
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

</style>
