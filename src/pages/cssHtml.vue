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
      <el-collapse-item title="反馈 Feedback"
                        name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
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
export default {
  data() {
    return {
      activeName: null
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
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
