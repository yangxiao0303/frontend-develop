import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  components:{App},
  render(h) {
    return h(App)
  },
}).$mount('#root');