<template>
  <div>
    <img src="../assets/logo.png" alt="Planets" usemap="#planetmap" />
    <map name="planetmap">
      <area shape="rect" coords="0,0,110,260" href="" alt="Sun" />
      <area shape="circle" coords="129,161,10" href="" alt="Mercury" />
      <area shape="circle" coords="180,139,14" href="" alt="Venus" />
    </map>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log('uiArea');
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>


