<template>
  <form class="checkbox">
    Hobbies: 
    <!-- v-model will collect the 'checked' bolean value if there is no value been configured -->
    <label for="somke">Smoke
    <input type="checkbox" id="somke" value="smoke" v-model="hobby"></label>
    <label for="drink">Drink
    <input type="checkbox" id="drink" value="drink" v-model="hobby"></label>
    <label for="play">Play
    <input type="checkbox" id="play" value="play" v-model="hobby"></label>
  </form>
</template>

<script>
  export default {
    name:'FormCheckbox',
    data() {
      return {
        hobby:[],
      }
    },
  }
</script>

<style scoped>
  .checkbox{
    background-color: aquamarine;
    border-radius: 5px;
    border: 1px dotted black;
  }
</style>