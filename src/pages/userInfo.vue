<template>
    <div>
        <ui-header title="用户信息"></ui-header>
        <router-link to="/index">index</router-link>
    </div>
</template>

<script>
import uiHeader from "@/components/uiHeader";

export default {
  data() {
    return {};
  },
  components: {
    uiHeader
  },
  created() {
    console.log("用户信息");
  }
};
</script>

