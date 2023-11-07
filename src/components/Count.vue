<template>
  <div class="count">
    <h1>当前的和为: {{ $store.state.sum }}</h1>
    <h1>土味情话: {{ $store.state.sentence }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="oddAdd">当前和为奇数+</button>
    <button @click="waitAdd">等一等+</button>
    <button @click="serverAdd">从服务器+</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 1,
      num: 1,
    };
  },
  methods: {
    add() {
      // 调用vc上绑定的$store里的commit 跳过 action阶段
      // 注意,mutation 阶段不能跳过, Vuex devtool 监视他的状态变化
      this.$store.commit('JIA',this.num);
    },
    minus() {
      this.$store.commit('JIAN',this.num);
    },
    oddAdd() {
      this.$store.dispatch('jijia',this.num);
    },
    waitAdd() {
      this.$store.dispatch('dengjia',this.num);
    },
    serverAdd() {
      this.$store.dispatch('fuwujia');
    }
  },
};
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
button {
  margin: 0 5px;
}
</style>