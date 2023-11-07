import Vue from 'vue';
import axios from 'axios';
// 引入Vuex
import Vuex, { Store } from 'vuex';
// 使用插件
Vue.use(Vuex)
// 创建并暴露一个store实例对象
export default new Store({
  // 存储所有的"动作"
  actions: {
    // 没有意义的action就没有存在的必要

    jijia({ commit, state }, value) {
      if (state.sum % 2) {
        commit('JIA', value);
      }
    },
    dengjia({ commit }, value) {
      setTimeout(() => {
        commit('JIA', value);
      }, 500);
    },
    fuwujia({ commit }) {
      axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(
        res => {
          commit('QINGHUA',res.data.content);
        },
        err => {
          alter('请求出错', err.message);
        }
      )
    }
  },
  mutations: {
    // 例子 ======> 厨师
    // state 是最新的state的数据
    // value 是组件经由 actions 传递过来的数据值
    JIA(state, value) {
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
    QINGHUA(state,value) {
      state.sentence = value;
    }
  },
  state: {
    sum: 1,
    sentence: ''
  }
})