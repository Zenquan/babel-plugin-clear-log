import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import App from 'App.vue';
import utils from 'utils';
import 'styles/index.scss';
import 'mint-ui/lib/style.css'
// import Scroll from 'vue-slim-better-scroll'
import externalShare from 'lib/webchat-share.js'

utils.setRootFontSizeFromClient();
// Vue.use(Scroll)
Vue.use(externalShare)
Vue.prototype.nativeService = new nativeService()

if (/test/.test(window.location.href)) {
  // @ts-ignore
  var vConsole = new VConsole();
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
