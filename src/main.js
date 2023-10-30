// 引入 Vue
import Vue from 'vue'
// 引入 App 组件
import App from './App.vue'
// 关闭浏览器控制台开发模式提示
Vue.config.productionTip = false
// 生成vm
new Vue({
  render: h => h(App),
}).$mount('#app')
