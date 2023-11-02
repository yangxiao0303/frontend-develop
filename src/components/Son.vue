<template>
  <div class="son">
    <h2>father's car: {{ car }}</h2>
    <button @click="changeCar">changeCar to Mercedes</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: ["car","sendCar"],
  methods: {
    changeCar(){
      this.sendCar('Mercedes')
    }
  },
};
</script>

<style scoped>
</style>