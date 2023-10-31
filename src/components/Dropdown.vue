<template>
  <div class="dropdown">
    <label for="city">Branch</label>
    <select id="city" v-model="city">
      <option value="Beijing">Beijing</option>
      <option value="Shanghai">Shanghai</option>
      <option value="Chengdu">Chengdu</option>
      <option value="Shenzhen">Shenzhen</option>
      <option value="Wuhan">Wuhan</option>
      <option value="Xian">Xian</option>
    </select>
  </div>  
</template>

<script>
  export default {
    name:'Dropdown',
    data() {
      return {
        city:''
      }
    },
  }
</script>
<style scoped>
.dropdown{
  background-color: yellowgreen;
  border: 1px double maroon;
  border-radius: 5px;
}
  
</style>