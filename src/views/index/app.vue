<template>
  <div class="content">
    <v-header :left-icon="imageUrl.menu" title="迷你课表"></v-header>
    <v-course></v-course>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  import headerComponent from '../../components/header.vue';
  import courseComponent from './couse.vue';
  import imageUrl from '../../config/img';
  let navigator = weex.requireModule('navigator');

  export default {
    data () {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      imageUrl: imageUrl
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    },
    components: {
      vHeader: headerComponent,
      vCourse: courseComponent
    },
    mounted () {
      console.log(navigator)
      // navigator.push({url: './dist/index2.weex.js'});
    }
  }
</script>
