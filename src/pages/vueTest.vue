<template>
  <div>
    <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <button @click="changeMsg">
      Change the Message
    </button>
    <button @click="setUtil">设置Util</button>
    <button @click="showUtil">展示Util</button>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="vue-router的学习" name="1">
        <router-link to="/vueTest/redirect" exact>展示</router-link>
        <!-- 绝对路径 -->
        <!-- <router-link to="routerTest" append>展示</router-link> -->
        <!-- 相对路径，不建议使用 -->
        <router-view></router-view>
        <router-view name="left" style="float:left;width:50%;background-color:red;"></router-view>
        <router-view name="right" style="float:right;width:50%;background-color:yellow;"></router-view>
        <div class="important">注意：这边写的时候component要加s</div>
      </el-collapse-item>
      <el-collapse-item title="transition的使用" name="2">
        <button @click="show = !show">show/hide text</button>
        <transition name="fade" mode="out-in">
          <p v-if="show" key="1">111111</p>
          <p v-else key="2">222222</p>
        </transition>
        <transition name="fadebounce">
          <p v-show="show">Hello Worid</p>
        </transition>
      </el-collapse-item>
      <el-collapse-item title="复选框使用" name="3">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A" size='mini'></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </el-collapse-item>
      <el-collapse-item title="测试网络通讯" name="4">
        <button @click="testNetWork">测试</button>
      </el-collapse-item>
      <el-collapse-item title="使用Vue全局函数" name="5">
        <button @click="showOverFunction">测试</button>
      </el-collapse-item>
      <el-collapse-item title="父子组件传值" name="6">
        <button @click="comChange">父change</button>
        <son-component :list="comList" :str="comStr" :obj="comObj" @changeVal="sonComChange"></son-component>
      </el-collapse-item>
    </el-collapse>
    <div class="nav">
      <!-- <el-scrollbar :vertical="false" class="scroll-container">
        <ul class="clearfix">
          <li class="fl" v-for="(i,index) in list" :key="index" v-text="i"></li>
        </ul>
      </el-scrollbar> -->
      <!-- <scroll-view>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item :index="index" v-for="(i,index) in list" :key="index">{{i}}</el-menu-item>
        </el-menu>
      </scroll-view> -->
      <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
        <div class="nav-item" v-for="(i,index) in list" :key="index" v-text="i"></div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import axios from '@/api/axios';
import ScrollView from '@/components/ScrollView';
import sonComponent from '@/components/sonComponent';

export default {
  data() {
    return {
      activeName: null,
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
      reportTypes: {
        DEPT_INFO: {
          type: 'DEPT_INFO',
          name: '医院科室调研'
        },
        HOSPITAL: {
          type: 'HOSPITAL',
          name: '医院信息调研'
        },
        COMPETITOR: {
          type: 'COMPETITOR',
          name: '医院竞品调研'
        },
        DOCTOR: {
          type: 'DOCTOR',
          name: '医生访谈'
        },
        DEPT_MEETING: {
          type: 'DEPT_MEETING',
          name: '科室会'
        },
        LEARN: {
          type: 'LEARN',
          name: '产品学习研讨会'
        },
        CASE_COLLECTION: {
          type: 'CASE_COLLECTION',
          name: '病例搜集'
        },
        ACADEMIC: {
          type: 'ACADEMIC',
          name: 'KOL城市会'
        },
        ACADEMIC_COMM: {
          type: 'ACADEMIC_COMM',
          name: '医生学术传播'
        },
        PRESCRIPTION_SURVEY: {
          type: 'PRESCRIPTION_SURVEY',
          name: '医生处方调研'
        },
        HOSPITAL_DEVELOP: {
          type: 'HOSPITAL_DEVELOP',
          name: '医院开发'
        },
        ONETOONE_LEARN: {
          type: 'ONETOONE_LEARN',
          name: '1v1深度学习研讨'
        },
        ONETOONE_STRATEGY: {
          type: 'ONETOONE_STRATEGY',
          name: '市场策略商讨'
        },
        PROV_CENTRALIZED_TRAINING: {
          type: 'PROV_CENTRALIZED_TRAINING',
          name: '省代的产品学习研讨会'
        },
        HOSPITAL_NEWD: {
          type: 'HOSPITAL_NEWD',
          name: '医院上量开发报告'
        },
        HOSPITAL_NEWE: {
          type: 'HOSPITAL_NEWE',
          name: '医院入院开发报告'
        },
        SALE_FLOW_COLLECT: {
          type: 'SALE_FLOW_COLLECT',
          name: '流向数据采集'
        },
        PROV_GENERATION_MEETING: {
          type: 'PROV_GENERATION_MEETING',
          name: '市场策略研讨会'
        },
        ACADEMIC_MATERIAL_PREPAR: {
          type: 'ACADEMIC_MATERIAL_PREPAR',
          name: '学术资料准备'
        },
        CUSTOMER_VISIT: {
          type: 'CUSTOMER_VISIT',
          name: '客户拜访记录'
        },
        PROV_GEN_MTG_STAFF_WORK: {
          type: 'PROV_GEN_MTG_STAFF_WORK',
          name: '营销推广工作'
        },
        MARKET_COMPE_INTELLIGENCE: {
          type: 'MARKET_COMPE_INTELLIGENCE',
          name: '市场竞争情报'
        }
      },
      show: false,
      checkList: [],
      list: [
        '菜单1',
        '菜单2',
        '菜单3',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1',
        '菜单1'
      ],
      comList: ['111'],
      comStr: '111',
      comObj: {name: '111'}
    };
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap;
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello world.';
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    },
    setUtil() {
      Util.setCookie('AccessToken', '123');
    },
    showUtil() {
      alert(Util.getCookie('AccessToken'));
    },
    testNetWork() {
      let params = { pageNum: 1, pageSize: 20 };
      let data = {};
      axios({
        method: 'get',
        url: '/bzResourceCatalog/queryObject',
        params: params,
        data: data
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleScroll(e) {
      console.log(e);
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      const $scrollWrapper = this.scrollWrapper;
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
    },
    comChange(){
      // this.comList.push('222');
      this.comList = ['222'];
      this.comStr = '222';
      this.comObj = {name: '222'};
      // this.comObj.name = '222';
      console.log(this.comList,this.comStr,this.comObj);
    },
    sonComChange(){
      console.log(this.comList,this.comStr,this.comObj);
    }
  },
  components: {
    ScrollView,
    sonComponent
  },
  mounted() {
    console.log('测试先后：mounted');
  },
  created() {
    window.onload = () => {
      console.log('测试先后：onload');
    };
    $(function() {
      console.log('测试先后：ready');
    });
    console.log('测试先后：created');
    $(document).ready(function() {
      console.log('测试先后：ready');
    });
  }
};
</script>

<style lang="less" scoped>
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-active {
//   opacity: 0;
// }
.fade-leave-active,
.fade-enter-active {
  transition: all 1.5s;
}

.fade-enter,.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.fadebounce-enter-active{
  animation: bounce-in .5s;
}

.fadebounce-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0%{
    opacity: 0;
    transform: translateX(100px);
  }

  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}

.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  /deep/.el-scrollbar__bar {
    bottom: 0px;
  }
}

.clearfix {
  &:after {
    display: block;
    content: '';
    clear: both;
    height: 0;
    visibility: hidden;
  }
}

.nav {
  line-height: 50px;
  height: 50px;
  background-color: #218ad4;
  color: white;
  cursor: pointer;

  ul {
    height: 50px;
    width: 1000000px;
    overflow: hidden;
  }
  li {
    float: left;
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;

    &.active {
      background-color: #177cc3;

      &::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 6px solid #eceff1;
        content: '';
        position: absolute;
        bottom: 0;
        left: calc((100% - 16px) / 2);
      }
    }

    &:hover {
      background-color: #177cc3;
    }
  }

  .nav-item {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 10px;
    // position: relative;

    &.active {
      background-color: #177cc3;

      &::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 6px solid #eceff1;
        content: '';
        position: absolute;
        bottom: 0;
        left: calc((100% - 16px) / 2);
      }
    }

    &:hover {
      background-color: #177cc3;
    }
  }
}
</style>
