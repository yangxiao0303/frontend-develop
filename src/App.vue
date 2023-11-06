<template>
  <div class="box">
    <Category title="游戏">
      <!-- 父元素内, 需插入的位置添加 slot 属性, 其值为想用的插槽 name 值 -->
      <ul slot="s1">
        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
      </ul>
      <!-- 插入的内容 展示位置与书写位置无关，与子元素 模板内定义位置有关 -->
      <span slot="s3">更多活动敬请期待...</span>
      <strong slot="s2"><a href="#">年终大促</a></strong>
    </Category>
    <Category title="美食">
      <!-- 插入的内容 展示位置与书写位置无关，与子元素 模板内定义位置有关 -->
      <a slot="s2" href="#">点击领取优惠劵</a>
      <img slot="s1" :src="food" alt="好吃的" />
      <i slot="s3">限时优惠</i>
    </Category>
    <Category title="影视">
      <video slot="s1" :src="movie" controls></video>
      <span slot="s2">超好看！</span>
      <em slot="s3"><a href="#">立即购票</a> </em>
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
.box {
  background-color: #ddd;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 5px;
}
</style>