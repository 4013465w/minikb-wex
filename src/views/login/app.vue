<template>
  <div class="content">
    <div class="logo-row">
      <image class="logo" :src="imgUrls.logo"></image>
    </div>
    <div class="input-row">
      <div class="row">
        <text class="text">邮箱：</text>
        <input
        class="input"
        v-model="email"
        type="email"
        value=""></input>
      </div>
      <div class="row">
        <text class="text">密码：</text>
        <input
        class="input"
        v-model="password"
        type="password"></input>
      </div>
      <div class="row">
        <v-button value="注册" @click="reg" type="warning" size="middle" style="margin-top:12px;"></v-button>
        <v-button value="登录" @click="login" type="success" size="middle" style="margin-top:12px;margin-left: 15px;"></v-button>
      </div>

    <text class="title1">Assets: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    <text class="title2">http ttf: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    </div>
  </div>
</template>
<script>
  import imgUrls from '../../config/img.js';
  import buttonComponent from '../../components/button.vue';
var domModule = weex.requireModule('dom');

  export default {
    data () {
      return {
        imgUrls: imgUrls,
        email: '',
        password: ''
      }
    },
    methods: {
      login (event) {
        console.log(event)
      },
      reg () {

      }
    },
    components: {
      vButton: buttonComponent
    },
    mounted () {
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont1",
        'src' : "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
      });
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont2",
        'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
      });
      console.log(222222222222)
    }
  }
</script>

<style scoped>
.title1 {
    font-family: iconfont1;
  }
  .title2 {
    color: red;
    font-size: 36;
    fontFamily: iconfont2;
  }
  .logo-row {
    justify-content: center;
    width: 750px;
    flex-direction: row;
    margin-top: 100px;
  }
  .logo {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
  .input-row {
    margin-top: 100px;
  }
  .row {
    margin-top: 10px;
    width: 750px;
    flex-direction: row;
    justify-content: center;
  }
  .text {
    width: 100px;
    height: 70px;
    line-height: 70px;
  }
  .input {
    border-width: 1px;
    border-style: solid;
    border-color: #bbbbbb;
    width: 400px;
    height: 70px;

  }
</style>