<template>
  <div class="header">
    <div class="left">
      <image class="icon" :src="leftIcon"></image>
      <!-- <image class="title-bg" resize="cover" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image> -->
    </div>
    <text class="title">{{title}}</text>
    <div class="right">
      <image class="icon" :src="leftIcon"></image>
      <image class="icon" :src="leftIcon"></image>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  props: {
    leftIcon: String,
    title: String
  }
}
</script>
<style scoped>
  .header {
    width: 750px;
    height: 90px;
    background-color: #33CCCC;
    flex-direction: row;
    justify-content: space-between;
  }
  .title {
    color: #ffffff;
    line-height: 90px;
  }
  .left {
    height: 90px;
    width: 90px;
  }
  .right {
    flex-direction: row;
  }
  .icon {
    width: 90px;
    height: 90px;
  }
  .title-bg {
    width: 90px;
    height: 90px;
  }
</style>