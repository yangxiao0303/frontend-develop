<template>
  <div class="app">
    <Son :car="car" :sendCar="updateCar"/>
  </div>
  
</template>

<script>
import Son from './components/Son.vue'
  export default {
    name:'Dad',
    data() {
      return {
        car: 'Benz'
      }
    },
    components: {Son},
    methods:{
      updateCar(value){
        this.car = value;
      }
    }
  }
</script>

<style scoped>
  
</style>