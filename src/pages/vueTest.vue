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
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: null,
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
      reportTypes: {
        DEPT_INFO: { type: 'DEPT_INFO', name: '医院科室调研' },
        HOSPITAL: { type: 'HOSPITAL', name: '医院信息调研' },
        COMPETITOR: { type: 'COMPETITOR', name: '医院竞品调研' },
        DOCTOR: { type: 'DOCTOR', name: '医生访谈' },
        DEPT_MEETING: { type: 'DEPT_MEETING', name: '科室会' },
        LEARN: { type: 'LEARN', name: '产品学习研讨会' },
        CASE_COLLECTION: { type: 'CASE_COLLECTION', name: '病例搜集' },
        ACADEMIC: { type: 'ACADEMIC', name: 'KOL城市会' },
        ACADEMIC_COMM: { type: 'ACADEMIC_COMM', name: '医生学术传播' },
        PRESCRIPTION_SURVEY: {
          type: 'PRESCRIPTION_SURVEY',
          name: '医生处方调研'
        },
        HOSPITAL_DEVELOP: { type: 'HOSPITAL_DEVELOP', name: '医院开发' },
        ONETOONE_LEARN: { type: 'ONETOONE_LEARN', name: '1v1深度学习研讨' },
        ONETOONE_STRATEGY: { type: 'ONETOONE_STRATEGY', name: '市场策略商讨' },
        PROV_CENTRALIZED_TRAINING: {
          type: 'PROV_CENTRALIZED_TRAINING',
          name: '省代的产品学习研讨会'
        },
        HOSPITAL_NEWD: { type: 'HOSPITAL_NEWD', name: '医院上量开发报告' },
        HOSPITAL_NEWE: { type: 'HOSPITAL_NEWE', name: '医院入院开发报告' },
        SALE_FLOW_COLLECT: { type: 'SALE_FLOW_COLLECT', name: '流向数据采集' },
        PROV_GENERATION_MEETING: {
          type: 'PROV_GENERATION_MEETING',
          name: '市场策略研讨会'
        },
        ACADEMIC_MATERIAL_PREPAR: {
          type: 'ACADEMIC_MATERIAL_PREPAR',
          name: '学术资料准备'
        },
        CUSTOMER_VISIT: { type: 'CUSTOMER_VISIT', name: '客户拜访记录' },
        PROV_GEN_MTG_STAFF_WORK: {
          type: 'PROV_GEN_MTG_STAFF_WORK',
          name: '营销推广工作'
        },
        MARKET_COMPE_INTELLIGENCE: {
          type: 'MARKET_COMPE_INTELLIGENCE',
          name: '市场竞争情报'
        }
      }
    };
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
    }
  },
  components: {},
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
</style>
