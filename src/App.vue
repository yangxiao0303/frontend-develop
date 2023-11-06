<template>
  <div class="box">
    <!-- 插件中的全局组件 -->
    <Hello />
    <!-- 插件中的 全局自定义指令和属性-->
    <h2 v-beauty="xuexiao"></h2>
    <!-- 插件中的方法 -->
    <button @click="welcome">点我欢迎</button>

  </div>
</template>

<script>
import Game from "./components/Game.vue";
export default {
  name: "App",
  components: { Game },
  
};
</script>

<style>
.box {
  background-color: #ddd;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-evenly;
}
</style>