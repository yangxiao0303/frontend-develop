<template>
  <div class="app">
    <h2>{{ title }}</h2>
    <Enimation/>
    <hr>
    <Game/>
  </div>
</template>

<script>
import Enimation from "./components/Enimation.vue";
import Game from "./components/Game.vue";
export default {
  name: "App",
  data() {
    return {
      title: "Infomation Chart",
    };
  },
  components: { Enimation, Game },
};
</script>

<style scoped>
.app{
  background-color: #ccc;
  padding: 30px;
  box-shadow: 5px 5px 10px;
  border-radius: 15px;
}
</style>