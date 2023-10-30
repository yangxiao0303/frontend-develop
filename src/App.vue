<template>
  <div class="app">
    <h2>{{ title }}</h2>
    <School/>
    <hr>
    <person/>
  </div>
</template>

<script>
import Person from './components/Person.vue';
import School from './components/School.vue';
  export default {
    name:'App',
    components:{Person,School},
    data() {
      return {
        title:'信息表'
      }
    },
  }
</script>

<style scoped>
  .app{
    background-color: antiquewhite;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
  }
</style>