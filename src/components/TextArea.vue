<template>
  <div class="textarea">
    <label for="textarea">Other Info</label>
    <textarea id="textarea" v-model="info"></textarea>
    <br>
    <label for="agreement">
      <!-- checkbox infor collect -->
      <input type="checkbox" v-model="agreement" />
      Read and accept the <a href="#">User Agreement</a></label
    >
    <br>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  data() {
    return {
      info: "",
      agreement: false,
    };
  },
  methods:{
    submit(){
      alert('successfully Submitted!');
    }
  }
};
</script>

<style scoped>
.textarea{
  background-color: rgb(187, 174, 242);
  border: 1px double brown;
  border-radius: 5px;
  padding: 5px;
}
</style>