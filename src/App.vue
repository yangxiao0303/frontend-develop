<!-- 定义App模板结构 -->
<template>
  <div class='app'>
    <h2>我是{{ name }}组件,欢迎来到{{ school }}学习Vue</h2>
    <button @click="welcome">热烈欢迎</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        school: '尚硅谷',
      }
    },
    methods: {
      welcome() {
        alert('欢迎欢迎,热烈欢迎!');
      }
    }
  }
</script>

<style>
.app {
  background-color: aliceblue;
  border: solid 1px #ccc;
}
</style>