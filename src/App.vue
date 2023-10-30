<template>
  <!-- 组件模板 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// 引入子组件 HelloWorld
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 设置组件名字
  name: 'App',
  // 将HelloWorld组件,注册为App的子组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
