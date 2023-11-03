<template>
  <div class="son">
    <h2>father's car: {{ car }}</h2>
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
  .son{
    border: 1px solide black;
    box-shadow: 0 0 10px;
    border-radius: 5px;
    background-color: aquamarine;
  }
</style>