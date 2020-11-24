<template>
  <div class="index">
    <el-menu :router="true" class="el-menu-vertical-demo" mode="horizontal" background-color="#fff" text-color="#303133" active-text-color="#409EFF">
      <el-menu-item :index="'/layout/'+key" v-for="(val, key) in menu" :key="key">
        <i :class="[val.icon]"></i>
        <span slot="title">{{val.text}}</span>
      </el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu: {
        manage: { text: '轮椅管理', icon: 'el-icon-edit-outline' },
        privilege: { text: '权限管理', icon: 'el-icon-document' },
        statistics: { text: '数据统计', icon: 'el-icon-edit-outline' }
      }
    };
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.index {
  .title {
    border-bottom: 1px solid #e5e5e5;
    line-height: 40px;
    font-size: 20px;
  }
  .switch {
    align-items: center;
    padding: 10px 10px;
    background: #fff;
    border-right: 1px solid #e5e5e5;

    .line {
      border-bottom: 1px solid #cccccc;
      width: 100%;
    }
    .ellipse {
      padding: 0px 5px;
      line-height: 18px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 100%;
      border: 1px solid #bbb;
    }
  }
}
</style>