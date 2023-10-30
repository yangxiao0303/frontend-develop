<template>
  <div class="enimation">
    <h2>Personal Info</h2>
    <label for="given">Givenname:</label>
    <input id="given" type="text" placeholder="please enter the givenname" v-model="givenName"><br>
    <label for="sur">Surname:</label>
    <input id="sur" type="text" placeholder="please enter the surnname" v-model="surName"><br>
    <h3>{{ fullName }}</h3>
    <button @click="intoJapanese">Click to translate fullName into Japanese</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Enimation",
  data() {
    return {
      givenName:'anya',
      surName:'foger'
    }
  },
  computed:{
    fullName:{
      get(){
        return this.givenName.slice(0,1).toUpperCase() + this.givenName.slice(1) + '-' 
        + this.surName.slice(0,1).toUpperCase() + this.surName.slice(1)
      },
      set(value){
        let [str1,str2] = value.split('・');
        this.givenName = str1;
        this.surName = str2;
      }
    }
  },
  methods:{
    intoJapanese(){
      this.fullName = 'アーニャ・フォージャー ';
    }
  }
};
</script>

<style scoped>
  .enimation{
    background-color: palevioletred;
    border: 2px solid black;
    box-shadow: 0 0 10px;
    margin: 10px;
    border-radius: 5px;
    padding: 20px;
  }
</style>