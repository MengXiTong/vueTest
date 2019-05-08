<template>
  <div>
    <ui-header @back="goBack" @submit="submit" title="用户信息"></ui-header>
    <router-link to="/">index</router-link>
  </div>
</template>

<script>
import uiHeader from '@/components/uiHeader';

export default {
  data() {
    return {};
  },
  components: {
    uiHeader
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
    submit(data) {
      console.log(data);
    }
  },
  created() {
    console.log('用户信息');
  }
};
</script>

