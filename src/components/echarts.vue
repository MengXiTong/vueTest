<template>
  <div>
    <div id="echarts" style="width: 600px;height:400px;"></div>
    <div id="echarts1" style="width: 300px;height:200px;"></div>
    <div id="echarts2" style="width: 600px;height:600px;"></div>
    <div id="echarts3" style="width: 600px;height:600px;"></div>
  </div>
</template>

<script>
const echarts = require('echarts');

export default {
  name: 'echarts',
  methods: {
    genData(count) {
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < 50; i++) {
        name =
          Math.random() > 0.65
            ? this.makeWord(4, 1) + '·' + this.makeWord(3, 0)
            : this.makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
      }

      return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
      };
    },
    makeWord(max, min) {
      var nameList = [
        '赵',
        '钱',
        '孙',
        '李',
        '周',
        '吴',
        '郑',
        '王',
        '冯',
        '陈',
        '褚',
        '卫',
        '蒋',
        '沈',
        '韩',
        '杨',
        '朱',
        '秦',
        '尤',
        '许',
        '何',
        '吕',
        '施',
        '张',
        '孔',
        '曹',
        '严',
        '华',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '谢',
        '邹',
        '喻',
        '柏',
        '水',
        '窦',
        '章',
        '云',
        '苏',
        '潘',
        '葛',
        '奚',
        '范',
        '彭',
        '郎',
        '鲁',
        '韦',
        '昌',
        '马',
        '苗',
        '凤',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鲍',
        '史',
        '唐',
        '费',
        '廉',
        '岑',
        '薛',
        '雷',
        '贺',
        '倪',
        '汤',
        '滕',
        '殷',
        '罗',
        '毕',
        '郝',
        '邬',
        '安',
        '常',
        '乐',
        '于',
        '时',
        '傅',
        '皮',
        '卞',
        '齐',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顾',
        '孟',
        '平',
        '黄',
        '和',
        '穆',
        '萧',
        '尹',
        '姚',
        '邵',
        '湛',
        '汪',
        '祁',
        '毛',
        '禹',
        '狄',
        '米',
        '贝',
        '明',
        '臧',
        '计',
        '伏',
        '成',
        '戴',
        '谈',
        '宋',
        '茅',
        '庞',
        '熊',
        '纪',
        '舒',
        '屈',
        '项',
        '祝',
        '董',
        '梁',
        '杜',
        '阮',
        '蓝',
        '闵',
        '席',
        '季',
        '麻',
        '强',
        '贾',
        '路',
        '娄',
        '危'
      ];
      var nameLen = Math.ceil(Math.random() * max + min);
      var name = [];
      for (var i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join('');
    },
    color(i, j) {
      if (j > 12 - i) {
        return 0;
      }
      return (j - i) * 0.1;
    },
    color2(i, j) {
      if (j > 10 - i) {
        return 0;
      }
      return ((j - i) * 0.1).toFixed(1);
    }
  },
  created() {}, // 在模板渲染成html或者模板编译进路由前调用created
  mounted() {
    let _self = this;
    $(function() {}); // mounted已完成模板已经渲染或el对应html渲染后
    let data = _self.genData(50);
    let option = {
      title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    let chart = echarts.init(document.getElementById('echarts'));
    chart.setOption(option);
    let option1 = {
      title: {
        text: '73.33%',
        subtext: '达成率',
        x: 'center',
        bottom: '0'
      },
      series: [
        {
          type: 'pie',
          radius: ['135%', '150%'], //扩大半径
          center: ['50%', '100%'], //第二个值控制上下位置，100%为底部
          hoverAnimation: false, //不开启联动区的放大效果
          avoidLabelOverlap: false, //是否启用防止标签重叠策略
          labelLine: {
            //不显示视觉引导线
            normal: {
              show: false
            }
          },
          startAngle: 180,
          endAngle: 0,
          data: [
            { value: 5 }, //实际
            { value: 3, itemStyle: { normal: { color: '#eeeeee' } } }, //剩余
            { value: 8, itemStyle: { normal: { color: 'rgba(0,0,0,0)' } } } //计划（总的）
          ]
        }
      ]
    };
    let chart1 = echarts.init(document.getElementById('echarts1'));
    chart1.setOption(option1);

    /**
     * 相关性分析图表
     */
    let data2 = [];
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 11; j++) {
        data2.push([i, j, this.color(i, j)]);
      }
    }
    let option2 = {
      xAxis: {},
      yAxis: {},
      visualMap: {
        left: 'right',
        bottom: '20%',
        min: -1,
        max: 1,
        calculable: true,
        inRange: {
          color: ['#50a3ba', '#fff', '#eac736']
        },
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          return params.value[2];
        }
      },
      series: [
        {
          symbolSize: 20,
          data: data2,
          type: 'scatter'
        }
      ]
    };
    let chart2 = echarts.init(document.getElementById('echarts2'));
    chart2.setOption(option2);
    /**
     * 相关性分析图表测试热力图效果
     */
    let data3 = [];
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        data3.push([i, j, this.color2(i, j)]);
      }
    }
    let axis = [];
    for (let i = 1; i <= 11; i++) {
      axis.push(i);
    }
    let option3 = {
      xAxis: {
        type: 'category',
        data: axis,
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: axis,
        splitArea: {
          show: true
        }
      },
      visualMap: {
        left: 'right',
        bottom: 'center',
        min: -1,
        max: 1,
        calculable: true,
        inRange: {
          color: ['#50a3ba', '#fff', '#eac736']
        },
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          return params.value[2];
        }
      },
      series: [
        {
          data: data3,
          type: 'heatmap',
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    let chart3 = echarts.init(document.getElementById('echarts3'));
    chart3.setOption(option3);
    console.log(option3);
  }
};
</script>

<style lang="less" scoped>
</style>
