// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue';
// 关闭开发模式提示
Vue.config.productionTip = false;

// 声明vm并注册App为子元素
new Vue({
  render:h => h(App)
}).$mount('#app');