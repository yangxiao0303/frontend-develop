<template>
  <div class="input">
    <label for="acc">Account#: </label>
    <input
      type="text"
      id="acc"
      placeholder="Plaese enter your account"
      v-model="account"
    />
    <br>
    <label for="pass">Password: </label>
    <input
      type="password"
      id="pass"
      placeholder="Plaese enter password"
      v-model="password"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      account:'',
      password:''
    }
  },
};
</script>

<style scoped>
.input{
  background-color: antiquewhite;
  border: 1px solid black;
  border-radius: 5px;
}
</style>