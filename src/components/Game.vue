<template>
  <div class="game">
    <h3>今日游戏推荐</h3>
    <!-- 作用域插槽 -->
    <slot :games="games"></slot>
    <!-- 作用域插槽与具名插槽合用 -->
    <slot name="s2" text="年终大促"></slot>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      games: [
        { id: "asdtrd1", name: "英雄联盟" },
        { id: "asdtrd2", name: "原神" },
        { id: "asdtrd3", name: "红色警戒" },
        { id: "asdtrd4", name: "斗罗大陆" },
      ],
    };
  },
};
</script>

<style scoped>
.game{
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: 0 0 10px;
  width: 300px;
  height: 400px;
}

h3{
  background-color: orange;
  font-size: 24px;
  text-align: center;
}
</style>