<template>
  <div class="box">
    <!-- 内置指令 dircetives -->
    <h2 v-text="sum"></h2>
    <!-- 自定义指令 数字10倍放大 -->
    <h2 v-big="sum">哈哈</h2>
    <!-- 自定义指令 beauty 改变样式 -->
    <span v-beauty="name"></span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sum: 123,
      name: "高圆圆",
    };
  },
  directives:{
    big(element,{value}){
      element.innerText += value*10;
    },
    beauty(element,{value}){
      element.innerText = value;
      element.style.backgroundColor = '#dd302d';
      element.style.color = 'aqua';
    }
  }
};
</script>

<style scoped>
.box{
  background-color: #ddd;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>