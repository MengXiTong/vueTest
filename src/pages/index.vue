<template>
  <div class="hello">
    <ui-header title='vue测试'></ui-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>大家好我是测试测试</h3>
    <div>{{count}}</div>
    <button @click="addCount()">+</button>
    <button @click="reduceCount()">-</button>
    <div><button @click="goUserInfo()">用户信息</button></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import uiHeader from "@/components/uiHeader";
import store from "@/store/index"

export default {
  store: store,
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    // uiHeader: (resolve, reject) => {
    //   require(["@/components/uiHeader"], resolve);
    // }
    uiHeader
  },
  computed: {
    ...mapState({
      count: state => state.count.count
    })
  },
  methods: {
    addCount(){
      store.dispatch("add",'我是加');
    },
    reduceCount(){
      store.dispatch("reduce",'我是减');
    },
    goUserInfo(){
      console.log('去用户信息界面');
      console.log(this);
      this.$router.replace({ name: 'userInfo'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
