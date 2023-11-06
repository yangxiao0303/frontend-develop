<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="name"
      />&nbsp;<button @click="seacrch">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
    return {
      name: ''
    }
  },
  methods:{
    seacrch(){
      axios.get(`https://api.github.com/search/users?q=${this.name}`).then(
        res=>{
          console.log(res.data);
          // 通过vc能找到$bus上绑定的事件,用$emit发送事件
          // 第一参数为事件名称,第二参数
          this.$bus.$emit('user-list',res.data.items);
        },
        err=>{
          alert('Failed',err.message);
        })
    }
  }
};
</script>

<style scoped>
</style>