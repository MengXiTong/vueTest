<template>
  <div class="hello">
    <ui-header title='vue测试'></ui-header>
    <button @click="navigateTo('userInfo')">用户信息</button>
    <button @click="navigateTo('jqTest')">JQUERY测试</button>

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import uiHeader from "@/components/uiHeader";
import store from "@/store/index";
import { testTitle, setTitle } from "@/mixins/testMixins";
import show from "@/mixins/classMixins"

export default {
  store: store,
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      url:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700762404,3403418546&fm=26&gp=0.jpg"
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
    navigateTo(name) {
      this.$router.replace({ name });
    }
  },
  created() {},
  mounted() {
    console.log(testTitle);
    let showNow = new show();
    console.log(showNow.title);
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
