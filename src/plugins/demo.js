// 引入需要的内容
import Hello from '../components/Hello.vue';

// 创建一个插件并暴露
export default {
  // 当插件被安装后,将被调用
  install(Vue){
    // 引入全局组件
    Vue.component('Hello',Hello);

    // 自定义的全局指令
    // fnction中参1:元素名称, 参2:数据
    Vue.directive('beauty',function(element,{value}){
      element.innerText = value;
      element.style.backgroundColor = '#dd302d';
      element.style.color = 'aqua';
    })

    // 全局的方法和属性
    Vue.prototype.welcome = function(){
      alert('你好');
    }
    Vue.prototype.xuexiao = '尚硅谷'

    // 过滤器
    
  }
}