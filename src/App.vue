<template>
  <div class="box">
    <Game>
      <template scope="data">
        <ul>
          <li v-for="game in data.games" :key="game.id">{{ game.name }}</li>
        </ul>
      </template>
    </Game>
    <Game>
      <!-- <template slot-scope={games}> -->
        <!-- <template v-slot="{games}"> -->
        <template v-slot:default ="{games}">  
        <ol>
          <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ol>
      </template>
    </Game>
    <Game>
      <!-- 具名作用域插槽 -->
      <template v-slot:s2="{text}">
        <h3>
          {{ text }}
        </h3>
      </template>
    </Game>
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