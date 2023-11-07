<template>
  <div class="count">
    <h1>当前的和为: {{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="oddAdd">当前和为奇数+</button>
    <button @click="waitAdd">等一等+</button>
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
      this.sum += this.num;
    },
    minus() {
      this.sum -= this.num;
    },
    oddAdd() {
      if (this.sum % 2) {
        this.sum += this.num;
      }
    },
    waitAdd() {
      setTimeout(() => {
        this.sum += this.num;
      }, 500);
    },
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