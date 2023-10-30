<template>
  <div class="game">
    <h2>Game Info</h2>
    <h3>Name:{{ gameName }}</h3>
    <h3>Release Date:{{ releaseDate }}</h3>
    <button @click="price">Click to show the approximate price</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Game",
  data() {
    return {
      gameName:'Black Myth: WuKong',
      releaseDate:'Q3 2024'
    }
  },
  methods:{
    price(){
      alert('price is $99');
    }
  }
};
</script>

<style scoped>
.game{
  background-color: cadetblue;
  border-radius: 8px;
  box-shadow: 0 0 10px;
  border: 3px double darkblue;
  padding: 20px;
}
</style>