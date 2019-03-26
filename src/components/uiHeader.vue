<template>
  <div class="header row">
    <div @click="$emit('back')">< 返回</div>
    <div class="col" @click="clickContent()">{{title}}</div>
    <div @click="$emit('submit','提交内容。。')">提交</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "首页"
    }
  },
  data() {
    return {};
  },
  methods: {
    clickContent(){
      console.log('标题点击了');
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.header {
  text-align: center;
  font-size: 16px;
  background: #fff;
}
</style>
