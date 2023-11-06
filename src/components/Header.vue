<template>
  <div class="todo-header">
    <input 
    type="text" 
    placeholder="请输入你的任务名称，按回车键确认" 
    @keyup.enter="handleTitle"
    v-model="title"
    />
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
export default {
  name: "Header",
  data() {
    return {
      title:''
    }
  },
  methods: {
    handleTitle(){
      // 如果输入为空
      if(!this.title.trim()) return;
      // 如果输入不为空
      else {
        // 设置新增todo 的格式
        let todoObj = {
          id: nanoid(),
          title: this.title,
          done: false
        }
        // 调用 父元素方法
        this.$emit('add-todo',todoObj);
        // 清空输入框
        this.title = "";
      }
    }
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>