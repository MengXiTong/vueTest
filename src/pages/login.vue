<template>
  <div class="login-wrap" style="background:blue">
    <div class="login-header">
      <div>吉芮医疗平台logo</div>
    </div>
    <div class="main-box">
      <div class="main-inner">
        <div class="login">
          <h2 class="ta-c mat20">账号登陆</h2>
          <el-form :model="params" class="mat20" ref="form">
            <el-form-item prop="username">
              <el-input size="medium" prefix-icon="el-icon-user" v-model="params.username" placeholder="请输入用户名" class="mat5" clearable>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input size="medium" prefix-icon="el-icon-lock" v-model="params.password" placeholder="请输入密码" class="mat5" show-password clearable>
              </el-input>
            </el-form-item>
            <el-button size="medium" type="primary" :loading="loading" class="mat30" style="width:100%;">登录</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <div class="mat40">
      <p class="ta-c">版权所有©1997-2019</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        username: '',
        password: ''
      },
      loading: false
    };
  }
};
</script>


<style lang="less" scoped>
.login-wrap {
  height: 100vh;
  // background-color:#f3f3f3;
}
.login-header {
  // width:1190px;
  margin: 0 20px;

  line-height: 70px;
}
.main-box {
  width: 100%;
  min-width: 1190px;
  height: 640px;
  // background-color:teal;
  background-size: cover;
  .main-inner {
    width: 1190px;
    margin: 0 auto;
    position: relative;
    .login {
      position: absolute;
      border-radius: 5px;
      top: 100px;
      right: calc((100% - 300px) / 2);
      width: 300px;
      height: 400px;
      padding: 0 20px;
      background-color: #fff;
    }
  }
}
</style>
