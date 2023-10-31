<template>
  <form class="radio">
    <!-- radio need have a value for vue to collect-->
    Gender:
    <label for="male">
      Man
      <input
        type="radio"
        name="sex"
        id="male"
        value="male"
        v-model="gender" 
      />
    </label>
    <label for="female">
      Woman
      <input
        type="radio"
        name="sex"
        id="female"
        value="female"
        v-model="gender"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "FormRadio",
  data() {
    return {
      gender: ""
    };
  },
};
</script>

<style scoped>
.radio{
  background-color: azure;
  border-radius: 5px;
  border: 1px solid black;
}
</style>