<template>
  <div>
    <div>我是个子组件</div>
    <div>{{'数组：'+list}}
      <button @click="list.push('222');change()">change</button>
    </div>
    <div>{{'字符串：'+str}}
      <button @click="str='222';change()">change</button>
    </div>
    <div>{{'对象：'+Object.values(obj)}}
      <button @click="obj[Object.keys(obj)[0]] = '222';change();">change</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    str: {
      type: String,
      default: () => ''
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    change(){
      this.$emit('changeVal');
    }
  }
};
</script>


<style lang="less" scoped>
</style>
