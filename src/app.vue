<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
var domModule = weex.requireModule('dom');
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    mounted () {
      domModule.addRule('font-face', {
        'font-family': "iconfont",
        'src' : "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
      });
    }
  }
</script>