<template>
  <div>
    大家我是测试样式
    <el-collapse v-model="activeName"
                 accordion>
      <el-collapse-item title="overflow:hidden的使用"
                        name="1">
        <div class="box">
          <div class="content c-fff fs14 tl">
            overflow:hidden隐藏溢出，清除浮动(体现在去除box的高度会自动撑开)
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="echarts使用测试"
                        name="2">
        <div id="echarts"
             style="width: 600px;height:400px;"></div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency"
                        name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability"
                        name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <div class="line">
      <div class="rightAngle"></div>
      <div class="circular"></div>
    </div>
  </div>
  </div>
</template>

<script>
const echarts = require("echarts");
export default {
  data() {
    return {
      activeName: null
    };
  },
  components: {},
  methods: {
    genData(count) {
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < 50; i++) {
        name =
          Math.random() > 0.65
            ? this.makeWord(4, 1) + "·" + this.makeWord(3, 0)
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
        "赵",
        "钱",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "褚",
        "卫",
        "蒋",
        "沈",
        "韩",
        "杨",
        "朱",
        "秦",
        "尤",
        "许",
        "何",
        "吕",
        "施",
        "张",
        "孔",
        "曹",
        "严",
        "华",
        "金",
        "魏",
        "陶",
        "姜",
        "戚",
        "谢",
        "邹",
        "喻",
        "柏",
        "水",
        "窦",
        "章",
        "云",
        "苏",
        "潘",
        "葛",
        "奚",
        "范",
        "彭",
        "郎",
        "鲁",
        "韦",
        "昌",
        "马",
        "苗",
        "凤",
        "花",
        "方",
        "俞",
        "任",
        "袁",
        "柳",
        "酆",
        "鲍",
        "史",
        "唐",
        "费",
        "廉",
        "岑",
        "薛",
        "雷",
        "贺",
        "倪",
        "汤",
        "滕",
        "殷",
        "罗",
        "毕",
        "郝",
        "邬",
        "安",
        "常",
        "乐",
        "于",
        "时",
        "傅",
        "皮",
        "卞",
        "齐",
        "康",
        "伍",
        "余",
        "元",
        "卜",
        "顾",
        "孟",
        "平",
        "黄",
        "和",
        "穆",
        "萧",
        "尹",
        "姚",
        "邵",
        "湛",
        "汪",
        "祁",
        "毛",
        "禹",
        "狄",
        "米",
        "贝",
        "明",
        "臧",
        "计",
        "伏",
        "成",
        "戴",
        "谈",
        "宋",
        "茅",
        "庞",
        "熊",
        "纪",
        "舒",
        "屈",
        "项",
        "祝",
        "董",
        "梁",
        "杜",
        "阮",
        "蓝",
        "闵",
        "席",
        "季",
        "麻",
        "强",
        "贾",
        "路",
        "娄",
        "危"
      ];
      var nameLen = Math.ceil(Math.random() * max + min);
      var name = [];
      for (var i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join("");
    }
  },
  created() {}, // 在模板渲染成html或者模板编译进路由前调用created
  mounted() {
    let _self = this;
    $(function() {}); // mounted已完成模板已经渲染或el对应html渲染后
    let data = _self.genData(50);
    let option = {
      title: {
        text: "同名数量统计",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
      },
      series: [
        {
          name: "姓名",
          type: "pie",
          radius: "55%",
          center: ["40%", "50%"],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    console.log(option);
    let chart = echarts.init(document.getElementById("echarts"));
    chart.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  background: #000;
  overflow: hidden;

  .content {
    float: left;
    width: 600px;
    height: 600px;
    background: red;
  }
}

.line {
  .rightAngle {
    height: 40px;
    width: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    vertical-align: bottom;
    display: inline-block;
  }

  .circular {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 100px;
    vertical-align: bottom;
    display: inline-block;
  }
}
</style>
