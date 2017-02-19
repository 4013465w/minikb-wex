export default {
  methods: {
    getImgUrl (url) {
      if(weex.config.env.platform == 'web') {
        return url['web'];
      }
      return url['native'];
    }
  }
}