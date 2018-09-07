<template>
  <div class="header">{{title}}</div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.header {
  text-align: center;
  font-size: 16px;
  background: #fff;
}
</style>
