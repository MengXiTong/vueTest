<template>
  <div>
    <h2 id="el" style="display:none;">Essential Links</h2>
    <h3 id="hID">大家好我是测试测试</h3>
    <form id="register">
      <label for="password">Password:</label>
      <input class="password" name="password" id="password" />
      <div class="password-meter">
        <div class="password-meter-message"> </div>
        <div class="password-meter-bg">
          <div class="password-meter-bar"></div>
        </div>
      </div>
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text"
        placeholder="Email">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </form>
    <div id="btn-clean">清空</div>
    <div class="local-value"></div>
    <render-test tag="div"></render-test>
    <render-test tag="p"></render-test>
    <render-test tag="span"></render-test>
    <input @keydown.enter="search" />
    <div style="display:flex;">
      <div style="flex:1" v-for="item in data">
        <div v-for="itemSon in item.context">{{itemSon}}</div>
      </div>
      <div style="flex:1">
        <button style="display:block;" v-for="num in data[0].context.length">按钮</button>
      </div>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="冒泡排序" name="1">
        排序前：
        <span v-for="item in list" :key="item">{{item+'&nbsp;&nbsp;'}}</span>
        <br> 排序后：
        <span v-for="item in sort(list)" :key="item">{{item+'&nbsp;&nbsp;'}}</span>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import renderTest from "@/components/renderTest";
  import {
    testTitle,
    setTitle
  } from "@/mixins/testMixins";
  import show from "@/mixins/classMixins";

  export default {
    data() {
      return {
        data: [],
        activeName: null,
        list: [1, 3, 2, 12, 10, 5, 6, 4]
      };
    },
    components: {
      renderTest
    },
    methods: {
      getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
      },
      getCanvasBase64(img) {
        var image = new Image(); //至关重要
        image.crossOrigin = "";
        image.src = img; //至关重要
        //   var deferred = $.Deferred(); //jquery中的promise
        let _self = this;
        // image.onload = function() {
        //   deferred.resolve(_self.getBase64Image(image)); //将base64传给done上传处理
        //   document.getElementById("container2").appendChild(image);
        // };
        // return deferred.promise(); //问题要让onload完成后再return sessionStorage['imgTest']
        return new Promise((resolve, reject) => {
          image.onload = function () {
            resolve(_self.getBase64Image(image)); //将base64传给done上传处理
          };
        });
      },
      search() {
        console.log("执行查询");
      },
      sort(list) {
        for (let i = 0; i < list.length; i++) {
          for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
              let temp = list[i];
              list[i] = list[j];
              list[j] = temp;
            }
          }
        }
        return list;
      }
    },
    created() {
      // $(document).ready(function() {}) == $(function() {})
      let _self = this;
      $(function () {
        // $("#register").validate();
        //   $("#hID").click(function() {
        //     $("#el").fadeIn("slow");
        //     $(this).replaceWith("<b>hello</b>");
        //   });
        for (let i = 0; i <= 10; i++) {
          let str = `<p>我是${i}</p>`;
          $(str).appendTo($(".local-value"));
        }
        $("#btn-clean").click(function () {
          $(".local-value").html("");
        });
        console.log($(".local-value")[0].innerHTML);
        _self
          .getCanvasBase64(
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700762404,3403418546&fm=26&gp=0.jpg"
          )
          .then(
            function (base64) {
              // console.log("方式二》》》》》》》》》", base64);
            },
            function (err) {
              console.log(err);
            }
          );
      });
      this.data = [{
          id: "1",
          classification: "动漫",
          dage_id: "1",
          context: ["火影忍者", "海蜇王", "死神", "七原罪"]
        },
        {
          id: "2",
          classification: "电影",
          dage_id: "2",
          context: ["战狼1", "战狼2", "红海", "美人鱼"]
        },
        {
          id: "3",
          classification: "电视剧",
          dage_id: "3",
          context: ["知否知否应是绿肥红瘦", "李卫当官1", "李卫当官2", "李卫当官3"]
        },
        {
          id: "4",
          classification: "综艺",
          dage_id: "4",
          context: ["快乐大本营", "天天向上", "我是大侦探", "明星大侦探"]
        }
      ];
    },
    mounted() {
      // console.log(testTitle);
      // setTitle("张三好");
      // console.log(testTitle);
      // let showNow = new show();
      // console.log(showNow.title);
      // showNow.setTitle('李四好');
      // console.log(showNow.title);
    }
  };

</script>

<style lang="less" scoped>


</style>
