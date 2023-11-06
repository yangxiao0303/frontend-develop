<template>
  <div class="box">
    <Category title="游戏"> 
      <ul>
        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
      </ul>
    </Category>
    <Category title="美食"> 
      <img :src="food" alt="好吃的">
    </Category>
    <Category title="影视"> 
      <video :src="movie" controls></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      games: [
        { id: "asdtrd1", name: "英雄联盟" },
        { id: "asdtrd2", name: "原神" },
        { id: "asdtrd3", name: "红色警戒" },
        { id: "asdtrd4", name: "斗罗大陆" },
      ],
      food: "http://49.232.112.44/images/food.jpg",
      movie: "http://49.232.112.44/video/movie.mp4",
    };
  },
};
</script>

<style>
.box{
  background-color: #ddd;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 5px;
}
</style>