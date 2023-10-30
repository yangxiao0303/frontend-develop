<template>
  <div class="school">
    <h2>学校信息</h2>
    <span>校名:{{schoolName}}</span>
    <span>地址:{{shcoolAddress}}</span>
    <button @click="showSchoolInfo">查看学校信息</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "School",
  data() {
    return {
      schoolName: '尚硅谷',
      shcoolAddress:'宏福科技园'
    };
  },
  methods:{
    showSchoolInfo(){
      alert(`${this.schoolName}坐落在${this.shcoolAddress}`);
    }
  }
};
</script>

<style scoped>
.school{
  background-color:aquamarine;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>