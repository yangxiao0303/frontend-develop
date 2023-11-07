<template>
  <div class="app">
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count.vue';
  export default {
    name:'App',
    components:{Count}
  }
</script>

<style>
  .app{
    width: 500px;
    background-color: #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px;
    border: 1px solid black;
    padding: 10px;
  }
</style>