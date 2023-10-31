<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <FormInput />
    <FormRadio/>
    <FormCheckbox/>
    <Dropdown/>
    <TextArea></TextArea>
  </div>
</template>

<script>
import FormInput from "./components/FormInput.vue";
import FormRadio from "./components/FormRadio.vue";
import FormCheckbox from "./components/FormCheckbox.vue";
import Dropdown from "./components/Dropdown.vue";
import TextArea from "./components/TextArea.vue"

export default {
  name: "App",
  // register the component
  components: { FormInput,FormRadio,FormCheckbox,Dropdown,TextArea },
  data() {
    return {
      title: "Personal Infomation Form",
    };
  },
};
</script>

<style scoped>
#app {
  background-color: bisque;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 5px 10px 30px;
  width: 500px;
}
</style>