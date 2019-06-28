<template>
  <div id="score">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p>一般</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aData: ['很差', '较差', '一般', '推荐', '力荐']
    };
  },
  methods: {
    onload() {
      this.$nextTick(_ => {
        var oDiv = document.getElementById('score');
        var aLi = oDiv.getElementsByTagName('li');
        var oP = oDiv.getElementsByTagName('p')[0];
        for (let index = 0; index < aLi.length; index++) {
          const element = aLi[index];
          element.onmouseover = () => {
            oP.style.display = 'block';
            oP.innerHTML = this.aData[index];
            for (let i = 0; i <= index; i++) {
              aLi[i].className = 'score-active';
            }
          };
          element.onmouseout = () => {
            oP.style.display = 'none';
            for (let i = 0; i < aLi.length; i++) {
              aLi[i].className = '';
            }
          };
          element.onclick = () => {
            alert(`评分成功，${index+1}分`);
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#score {
  & > ul {
    display: flex;

    & > li {
      margin: 5px 0;
      position: relative;
      display: block;
      width: 0px;
      height: 0px;
      border-right: 10px solid transparent;
      border-bottom: 7px solid #ccc;
      border-left: 10px solid transparent;
      -moz-transform: rotate(35deg);
      -webkit-transform: rotate(35deg);
      -ms-transform: rotate(35deg);
      -o-transform: rotate(35deg);

      &::before {
        border-bottom: 8px solid #ccc;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -4.5px;
        left: -6.5px;
        display: block;
        content: '';
        -webkit-transform: rotate(-35deg);
        -moz-transform: rotate(-35deg);
        -ms-transform: rotate(-35deg);
        -o-transform: rotate(-35deg);
      }

      &::after {
        position: absolute;
        display: block;
        top: 0.3px;
        left: -10.5px;
        width: 0px;
        height: 0px;
        border-right: 10px solid transparent;
        border-bottom: 7px solid #ccc;
        border-left: 10px solid transparent;
        -webkit-transform: rotate(-70deg);
        -moz-transform: rotate(-70deg);
        -ms-transform: rotate(-70deg);
        -o-transform: rotate(-70deg);
        content: '';
      }
    }

    .score-active {
      border-bottom: 7px solid yellow;

      &::before {
        border-bottom: 8px solid yellow;
      }

      &::after {
        border-bottom: 7px solid yellow;
      }
    }
  }

  & > p {
    width: 100px;
    border: 1px solid #ccc;
    margin-top: 10px;
    display: none;
  }
}
</style>


