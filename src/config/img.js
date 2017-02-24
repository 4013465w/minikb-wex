let url = 'http://192.168.0.6:8081/src/image/';
let images =  {
  left: 'icons/left',
  menu: 'menu',
  logo: 'logo'
};
let urls = {};
for(let i in images) {
  if(weex.config.platform) {
  // if(weex.config.platform == 'Web') {
    urls[i] = `${url}${images[i]}.png`;
  } else {
    urls[i] = `local:///${images[i]}`;
  }
}

export default urls;