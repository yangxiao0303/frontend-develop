<template>
      <div class="row">
      <div class="card" v-for="user in userList" :key="user.id">
        <a :href="user.html_url">
          <img :src="user.avatar_url" 
          style='width: 100px'
          />
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name:'List',
    data() {
      return {
        userList:[]
      }
    },
    // 定义一个事件(定义在需要接收数据的组件内部)
    methods:{
      saveUserList(list){
        this.userList = list;
      }
    },
    // 在挂在结束之前,将事件绑定
    // 第一个参数为事件名字.第二个参数为具体事件内容
    mounted(){
      this.$bus.$on('user-list',this.saveUserList)
    },
    // 在组件销毁之前要解绑事件
    beforeDestroy(){
      this.$bus.$off('user-list')
    }
  }
</script>

<style scoped>
  .album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>