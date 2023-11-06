<template>
  <div class="category">
    <h3>今日{{ title }}推荐</h3>
    <!-- 子元素中定义多个 slot 标签 并添加值不同的name属性 -->
    <slot name="s1">等待插入内容</slot>
    <slot name="s2">等待插入内容</slot><br>
    <slot name="s3">等待插入内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
}; 
</script>

<style scoped>
.category{
  width: 300px;
  height: 400px;
  background-color: lightblue;
  padding: 10px;
  border: 1px double black;
  border-radius: 5px;
  box-shadow: 0 0 10px;
}

h3 {
  background-color: orange;
  font-size: 20px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>