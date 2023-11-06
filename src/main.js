import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false;

Vue.directive('beauty',function(element,{value}){
  element.innerText = value;
  element.style.backgroundColor = '#dd302d';
  element.style.color = 'aqua';
})

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  components:{App},
  render(h) {
    return h(App)
  },
}).$mount('#root');