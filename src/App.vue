<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .red-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 50%;
    border: 1px #fff solid;
  }

  .cover {
    width: 100%;
    height: 100vh;
    background: center / 375px 311px no-repeat url(https://jyx-common.oss-cn-qingdao.aliyuncs.com/peanut/%E5%8A%A0%E8%BD%BD%E5%8A%A8%E6%95%88.gif),
      #fff;
  }

  .empty-page {
    background: top 140px center / 100px 100px no-repeat url(https://jyx-common.oss-cn-qingdao.aliyuncs.com/peanut/empty_page.png),
      #fff;
    width: 100%;
    height: 100vh;
    padding-top: 260px;
    text-align: center;

    .meta {
      font-size: 14px;
      color: #999999;
      line-height: 20px;
    }

    .btn {
      margin-top: 60px;
      border: 1px solid #ff6f92;
      border-radius: 42px;
      font-size: 16px;
      color: #ff6f92;
      padding: 0 30px;
      line-height: 42px;
      display: inline-block;
    }
  }

  .font-loop(50);

  /* prettier-ignore */
  .font-loop(@n, @i: 10) when (@n >=@i) {
    .fs@{i} {
      font-size: @i*1px;
    }

    // font-size-absolute
    .fsa@{i} {
      font-size: @i*1PX;
    }

    .font-loop(@n, (@i + 1));
  }

  .lh-loop(60);

  /* prettier-ignore */
  .lh-loop(@n, @i: 10) when (@n >=@i) {
    .lh@{i} {
      line-height: @i*1px;
    }

    // line-height-absolute
    .lha@{i} {
      line-height: @i*1PX;
    }

    .lh-loop(@n, (@i + 1));
  }

  .elips-loop(6);

  .elips-loop(@n, @i: 1) when (@n >=@i) {
    .elips@{i} {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      white-space: initial;
      word-break: break-all;
      -webkit-line-clamp: @i;
    }

    .elips-loop(@n, (@i + 1));
  }

  .margin-loop(50);

  .margin-loop(@n, @i: 1) when (@n >=@i) {
    .mal@{i} {
      margin-left: @i*1px;
    }

    .mar@{i} {
      margin-right: @i*1px;
    }

    .mat@{i} {
      margin-top: @i*1px;
    }

    .mab@{i} {
      margin-bottom: @i*1px;
    }

    .margin-loop(@n, (@i + 1));
  }

  .tc {
    text-align: center;
  }

  .tl {
    text-align: left;
  }

  .tr {
    text-align: right;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .border {
    border-top: 1px solid #e8e8e8;
  }

  .view {
    height: 100vh;
    width: 100vw;
    position: relative;
    background: #f5f7f8;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
  }

  .row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }

  .col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 100%;
  }

  .ver-center {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }

  .abs-center {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .c-fff {
    color: #fff;
  }

</style>
