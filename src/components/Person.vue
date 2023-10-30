<template>
  <div class="person">
    <h2>个人信息</h2>
    <span>姓名:{{ personName }}</span>
    <span>年龄:{{ personAge }}</span>
    <button @click="showPersonalInfo">点击查看个人信息</button>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line
    name:'Person',
    data() {
      return {
        personName: '张三',
        personAge: 18
      }
    },
    methods: {
      showPersonalInfo(){
        alert(`我叫${this.personName},今年${this.personAge}岁了.`);
      }
    },
  }
</script>

<style scoped>
  .person{
    background-color: #dd302d;
    box-shadow: 0 0 10px;
    border: 1px dotted gray;
    padding: 10px;
  }
</style>