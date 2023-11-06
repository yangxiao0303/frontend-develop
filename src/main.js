import Vue from "vue"
import App from "./App.vue"
import demo from "./plugins/demo";

Vue.config.productionTip = false;

// 引入并安装插件 
Vue.use(demo);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  components:{App},
  render(h) {
    return h(App)
  },
}).$mount('#root');