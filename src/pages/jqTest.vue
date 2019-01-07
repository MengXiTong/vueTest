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
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </form>
    <div id="btn-clean">清空</div>
    <div class="local-value"></div>
    <render-test tag="div"></render-test>
    <render-test tag="p"></render-test>
    <render-test tag="span"></render-test>
    <input @keydown.enter="search" />
  </div>
</template>

<script>
import renderTest from "@/components/renderTest";
import { testTitle, setTitle } from "@/mixins/testMixins";
import show from "@/mixins/classMixins";

export default {
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
        image.onload = function() {
          resolve(_self.getBase64Image(image)); //将base64传给done上传处理
        };
      });
    },
    search() {
      console.log("执行查询");
    }
  },
  created() {
    // $(document).ready(function() {}) == $(function() {})
    let _self = this;
    $(function() {
      // $("#register").validate();
      //   $("#hID").click(function() {
      //     $("#el").fadeIn("slow");
      //     $(this).replaceWith("<b>hello</b>");
      //   });
      for (let i = 0; i <= 10; i++) {
        let str = `<p>我是${i}</p>`;
        $(str).appendTo($(".local-value"));
      }
      $("#btn-clean").click(function() {
        $(".local-value").html("");
      });
      console.log($(".local-value")[0].innerHTML);
      _self
        .getCanvasBase64(
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700762404,3403418546&fm=26&gp=0.jpg"
        )
        .then(
          function(base64) {
            // console.log("方式二》》》》》》》》》", base64);
          },
          function(err) {
            console.log(err);
          }
        );
    });
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


