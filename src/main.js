import Vue from "vue"
import App from "./App.vue"
import store from "./store"

Vue.config.productionTip = false;


new Vue({
  components:{App},
  render(h) {
    return h(App)
  },
  store,
}).$mount('#root');