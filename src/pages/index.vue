<template>
  <div class="layout">
    <Header class="fs16" style="color:#FFF">vue测试</Header>
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <MenuItem name="1" to="/userInfo">
            <Icon type="ios-paper"></Icon>用户信息</MenuItem>
            <MenuItem name="2" to="/jqTest">
            <Icon type="ios-paper"></Icon>JQUERY测试</MenuItem>
            <MenuItem name="3" to="/cssHtml">
            <Icon type="ios-paper"></Icon>样式测试</MenuItem>
            <MenuItem name="4" to="/dota2">
            <Icon type="ios-paper"></Icon>dota2自走棋</MenuItem>
            <MenuItem name="5" to="/vueTest">
            <Icon type="ios-paper"></Icon>VUE测试</MenuItem>
            <MenuItem name="6" to="/lodashTest">
            <Icon type="ios-paper"></Icon>Lodash测试</MenuItem>
            <MenuItem name="7" to="/jsTest">
            <Icon type="ios-paper"></Icon>纯JS测试</MenuItem>
            <MenuItem name="8" to="/mapTest">
            <Icon type="ios-paper"></Icon>高德地图测试</MenuItem>
            <MenuItem name="9" to="/leafletMapTest">
            <Icon type="ios-paper"></Icon>leaflet地图测试</MenuItem>
            <MenuItem name="10" to="/TMapTest">
            <Icon type="ios-paper"></Icon>天地图测试</MenuItem>
            <MenuItem name="11" to="/BMapTest">
            <Icon type="ios-paper"></Icon>百度地图测试</MenuItem>
            <MenuItem name="12" to="/createjsTest">
            <Icon type="ios-paper"></Icon>动画背景</MenuItem>
            <MenuItem name="13" to="/dataV">
            <Icon type="ios-paper"></Icon>dataV测试</MenuItem>
            <MenuItem name="14" to="/iframeTest">
            <Icon type="ios-paper"></Icon>iframe测试</MenuItem>
            <MenuItem name="15" to="/easyFlowTest">
            <Icon type="ios-paper"></Icon>easyFlow测试</MenuItem>
            <MenuItem name="16" to="/DPSY0001">
            <Icon type="ios-paper"></Icon>中南钢铁大屏1</MenuItem>
            <MenuItem name="17" to="/DPSY0003">
            <Icon type="ios-paper"></Icon>中南钢铁大屏2</MenuItem>
          </Menu>
        </Sider>
        <Content :style="{padding: '24px', minHeight: 'calc(100vh - 132px)', background: '#fff'}">
          <p v-if="$route.name=='index'" class="tc fs32">首页</p>
          <template v-else>
            <keep-alive v-if="$route.meta.keepAlive">
              <router-view />
            </keep-alive>
            <router-view v-else />
          </template>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2018-2019 &copy; YJ</Footer>
    </Layout>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import uiHeader from '@/components/uiHeader';
import store from '@/store/index';
import { testTitle, setTitle } from '@/mixins/testMixins';
import show from '@/mixins/classMixins';
import vueMixins from '@/mixins/vueMixins';

export default {
  store: store,
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700762404,3403418546&fm=26&gp=0.jpg'
    };
  },
  components: {
    // uiHeader: (resolve, reject) => {
    //   require(["@/components/uiHeader"], resolve);
    // }
    uiHeader
  },
  mixins: [vueMixins],
  computed: {
    ...mapState({
      count: state => state.count.count
    })
  },
  methods: {
    navigateTo(name) {
      this.$router.replace({
        name
      });
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
<style lang="less" scoped>
</style>
