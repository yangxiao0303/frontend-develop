<template>
  <div class="box">
    <h2 v-beauty="name"></h2>
  </div>
</template>

<script>
  export default {
    name:'Child',
    data() {
      return {
        name:'高圆圆'
      }
    },
  }
</script>

<style scoped>
  .box{
    width: 100px;
  }
</style>