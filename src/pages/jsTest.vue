<template>
  <div>
    <h3>大家好我是JS测试</h3>
    <el-collapse v-model="activeName" accordion @change="handleCollapseChange">
      <el-collapse-item title="鼠标移动显示隐藏" name="1">
        <div id="div1" style="background:red;width:200px;height:40px;"></div>
        <div id="div2" style="background:grey;width:100px;height:40px;display:none;" class="mat10"></div>
      </el-collapse-item>
      <el-collapse-item title="图片滚动" name="2">
        <div style="display:flex;">
          <div id="btn-left" class="mar20" @click="speed = -1;"></div>
          <div id="wrap">
            <ul>
              <li style="background:#ccc" class="fl"></li>
              <li style="background:red" class="fl"></li>
              <li style="background:green" class="fl"></li>
              <li style="background:blue" class="fl"></li>
            </ul>
          </div>
          <div id="btn-right" class="mal20" @click="speed = 1;"></div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="电影影评" name="3">
        <score ref="score"></score>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import score from '@/components/score';

export default {
  data() {
    return {
      activeName: null,
      speed: -1,
      timer: null
    };
  },
  mounted() {
    window.onload = () => {
      //鼠标移动显示隐藏
      var oDiv1 = document.getElementById('div1');
      var oDiv2 = document.getElementById('div2');
      var timer = null;

      oDiv1.onmouseout = oDiv2.onmouseout = () => {
        timer = setTimeout(() => {
          oDiv2.style.display = 'none';
        }, 300);
      };

      oDiv1.onmouseover = oDiv2.onmouseover = () => {
        clearTimeout(timer);
        oDiv2.style.display = 'block';
      };
    };
  },
  methods: {
    handleCollapseChange(activeNames) {
      if (activeNames == '2') {
        this.pictureScrolling();
      } else if (activeNames == '3') {
        this.$refs.score.onload();
      }
    },
    pictureScrolling() {
      this.$nextTick(_ => {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        var oDiv = document.getElementById('wrap');
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        oUl.innerHTML += oUl.innerHTML;
        oUl.style.width = (aLi[0].offsetWidth + 20) * aLi.length + 'px';
        var scrolling = () => {
          this.timer = setInterval(_ => {
            oUl.style.left = oUl.offsetLeft + this.speed + 'px';
            if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
              oUl.style.left = '0px';
            } else if (oUl.offsetLeft > 0) {
              oUl.style.left = -oUl.offsetWidth / 2 + 'px';
            }
          }, 30);
        };
        scrolling();
        oUl.onmouseover = () => {
          clearInterval(this.timer);
        };
        oUl.onmouseout = scrolling;
      });
    }
  },
  components: {
    score
  }
};
</script>

<style lang="less" scoped>
#wrap {
  width: 350px;
  height: 50px;
  overflow: hidden;
  position: relative;

  & > ul {
    position: absolute;
    top: 0;
    left: 0;

    & > li {
      width: 100px;
      height: 50px;
      list-style-type: none;
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        position: relative;
        top: 2px;
      }
    }
  }
}

#btn-left,
#btn-right {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: orange;
  position: relative;
}

#btn-left::before,
#btn-left::after,
#btn-right::before,
#btn-right::after {
  width: 6px;
  height: 12px;
  background: #fff;
  position: absolute;
  content: '';
  left: 20px;
}

#btn-left::before {
  transform: skewX(-45deg);
  top: 13px;
}

#btn-left::after {
  transform: skewX(45deg);
  bottom: 13px;
}

#btn-right::before {
  transform: skewX(45deg);
  top: 13px;
  left: 22px;
}

#btn-right::after {
  transform: skewX(-45deg);
  bottom: 13px;
  left: 22px;
}
</style>
