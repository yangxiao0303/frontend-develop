import Vue from 'vue';
// 引入Vuex
import Vuex,{Store} from 'vuex';
// 使用插件
Vue.use(Vuex)
// 创建并暴露一个store实例对象
export default new Store({
  // 存储所有的"动作"
  actions:{
    // 例子 =====> 服务员
    // context ====> 是一个'工具箱' , 包含所有需要的方法和属性
    // value =====> 从组件的method中传来的数据
    jia(context,value){
      // 去下一步,通过 commit 方法传递数据到 mutations 中
      context.commit('JIA',value);
    },
    jian({commit},value){
      commit('JIAN',value);
    },
    jijia({commit,state},value){
      if (state.sum % 2) {
        commit('JIA',value);
      }
    },
    dengjia({commit},value){
      setTimeout(() => {
        commit('JIA',value);
      }, 500);
    }
  },
  mutations:{
    // 例子 ======> 厨师
    // state 是最新的state的数据
    // value 是组件经由 actions 传递过来的数据值
    JIA(state,value){
      state.sum += value;
    },
    JIAN(state,value){
      state.sum -= value;
    }
  },
  state:{
    sum:1
  }
})