<template>
  <!-- <dv-full-screen-container>content</dv-full-screen-container> -->
  <div>
    <dv-border-box-1 class="lh100">dv-border-box-1</dv-border-box-1>
    <dv-border-box-2 class="lh100">dv-border-box-2</dv-border-box-2>
    <dv-border-box-3 class="lh100">dv-border-box-3</dv-border-box-3>
    <dv-border-box-8 class="lh100">dv-border-box-8</dv-border-box-8>
    <dv-border-box-11 style="height: 300px;" title="dv-border-box-11">
      <div class="content">dv-border-box-11</div>
    </dv-border-box-11>
    <dv-capsule-chart :config="config" style="width:300px;height:200px" />
    <dv-scroll-board :config="config1" style="width:500px;height:220px" />
    <dv-scroll-ranking-board :config="config2" style="width:500px;height:300px" />
    <dv-active-ring-chart :config="config3" style="width:300px;height:300px" />
  </div>
</template>

<script>
export default {
  name: 'dataV',
  data() {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      },
      config1: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      },
      config2: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ]
      },
      config3: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.lh100 {
  line-height: 100px;
}
.content{
  padding-top: 100px;
  height: 300px;
  overflow-y: scroll;
}
</style>

