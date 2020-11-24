<template>
  <div class="transform">
    <div class="box" :class="effect[currentTxt]"></div>
    <div v-for="(list,index) in groupList" :key="'数组'+index">
      <div class="button" v-for="item in list" :key="item" @click="currentTxt = item">{{item}}</div>
    </div>
    <div class="button" @click="currentTxt = ''">重置</div>
  </div>
</template>

<script>
const chunk = require('lodash/chunk');

export default {
  name: 'transform',
  components: {},
  computed: {
    groupList() {
      return chunk(this.effectList, 2);
    }
  },
  data() {
    return {
      effect: {
        '向水平和垂直各移动 20 像素，也可以使用百分比平移': 'translate',
        '向水平平移 20 像素': 'translateX',
        '向垂直平移 20 像素': 'translateY',
        '水平、垂直方向放大 1.5 倍': 'scale',
        '水平方向放大 1.5 倍': 'scaleX',
        '垂直方向放大 1.5 倍': 'scaleY',
        '旋转元素，0 ~ 360 度之间，负值均可': 'rotate',
        '倾斜元素，0 ~ 360 度之间，负值均可': 'skew',
        '水平倾斜元素，0 ~ 360 度之间，负值均可': 'skewX',
        '垂直倾斜元素，0 ~ 360 度之间，负值均可': 'skewY',
        通过六个数值指定矩形: 'matrix',
        '不同的值可以累计，通过空格分割': 'rotate-scale'
      },
      effectList: [
        '向水平和垂直各移动 20 像素，也可以使用百分比平移',
        '向水平平移 20 像素',
        '向垂直平移 20 像素',
        '水平、垂直方向放大 1.5 倍',
        '水平方向放大 1.5 倍',
        '垂直方向放大 1.5 倍',
        '旋转元素，0 ~ 360 度之间，负值均可',
        '倾斜元素，0 ~ 360 度之间，负值均可',
        '水平倾斜元素，0 ~ 360 度之间，负值均可',
        '垂直倾斜元素，0 ~ 360 度之间，负值均可',
        '通过六个数值指定矩形',
        '不同的值可以累计，通过空格分割'
      ],
      currentTxt: ''
    };
  }
};
</script>

<style lang="less" scoped>
.transform {
  .box {
    width: 20px;
    height: 20px;
    background: blue;
    margin: 20px auto;
  }

  .button {
    padding: 10px 20px;
    border: 1px solid black;
    margin: 10px 10px 0px auto;
    display: inline-block;
    cursor: pointer;
    min-width: 400px;
  }

  .translate {
    transform: translate(20px, 20px);
  }

  .translateX {
    transform: translateX(20px);
  }

  .translateY {
    transform: translateY(20px);
  }

  .scale {
    transform: scale(1.5, 1.5);
  }

  .scaleX {
    transform: scaleX(1.5);
  }

  .scaleY {
    transform: scaleY(1.5);
  }

  .rotate {
    transform: rotate(-45deg);
  }

  .skew {
    transform: skew(45deg, 20deg);
  }

  .skewX {
    transform: skewX(45deg);
  }

  .skewY {
    transform: skewY(45deg);
  }

  .matrix {
    transform: matrix(1, 0, 0, 1, 30, 30);
  }

  .rotate-scale {
    transform: rotate(-45deg) scale(1.5);
  }
}
</style>
