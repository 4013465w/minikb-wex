let url = 'http://192.168.0.6:8081/src/image/';
let images =  {
  left: 'left',
  menu: 'menu'
};

let urls = {};
for(let i in images) {
  if(weex.config.platform == 'Web') {
    urls[i] = `${url}icons/${images[i]}.png`;
  } else {
    urls[i] = `local:///${images[i]}`;
  }
}

export default urls;