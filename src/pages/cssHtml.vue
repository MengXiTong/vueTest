<template>
  <div>
    大家我是测试样式
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="overflow:hidden的使用" name="1">
        <div class="box">
          <div class="content c-fff fs14 tl">
            overflow:hidden隐藏溢出，清除浮动(体现在去除box的高度会自动撑开)
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="echarts使用测试" name="2">
        <echarts></echarts>
      </el-collapse-item>
      <el-collapse-item title="transform的使用" name="3">
        <transform></transform>
      </el-collapse-item>
      <el-collapse-item title="流程" name="4">
        <div class="line">
          <div class="rightAngle"></div>
          <div class="circular"></div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="input各类型使用" name="5">
        <ui-input></ui-input>
      </el-collapse-item>
      <el-collapse-item title="树形控件" name="6">
        <ui-tree></ui-tree>
      </el-collapse-item>
      <el-collapse-item title="dialog组件的使用" name="7">
        <ui-dialog title="dialogDemo"></ui-dialog>
      </el-collapse-item>
      <el-collapse-item title="ztree的使用" name="8">
        <ztree></ztree>
      </el-collapse-item>
      <el-collapse-item title="transfer的使用" name="9">
        <transfer></transfer>
      </el-collapse-item>
      <el-collapse-item title="图片热区域map与area的使用" name="10">
        <ui-area></ui-area>
      </el-collapse-item>
      <el-collapse-item title="旋转动画效果" name="11">
        <div class="map">
          <img class="map1" src="@/assets/earth/lbx.png">
          <img class="map2" src="@/assets/earth/jt.png">
          <img class="map3" src="@/assets/earth/map.png">
        </div>
      </el-collapse-item>
      <el-collapse-item title="拉伸" name="12">
        <stretch></stretch>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import transform from '@/components/transform';
import echarts from '@/components/echarts';
import uiInput from '@/components/uiInput';
import uiTree from '@/components/uiTree';
import uiDialog from '@/components/dialog';
import ztree from '@/components/ztree';
import transfer from '@/components/transfer';
import uiArea from '@/components/uiArea';
import stretch  from '@/components/stretch';
export default {
  data() {
    return {
      activeName: null
    };
  },
  components: {
    transform,
    echarts,
    uiInput,
    uiTree,
    uiDialog,
    ztree,
    transfer,
    uiArea,
    stretch
  },
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

.map {
  position: relative;
  z-index: 1;
  width: 360px;
  height: 360px;
  margin-top: 30px;
  .map1,
  .map2,
  .map3,
  .map4 {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    right: 0;
  }
  .map1 {
    width: 360px;
    z-index: 2;
    animation: myfirst2 15s infinite linear;
    margin-top: -30px;
  }
  .map2 {
    width: 300px;
    z-index: 3;
    animation: myfirst 10s infinite linear;
  }
  .map3 {
    width: 300px;
    z-index: 1;
  }

  @keyframes myfirst2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes myfirst {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-359deg);
    }
  }
}
</style>
