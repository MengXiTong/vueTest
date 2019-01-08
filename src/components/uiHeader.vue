<template>
  <div class="header">{{title}}</div>
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
  methods: {},
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
