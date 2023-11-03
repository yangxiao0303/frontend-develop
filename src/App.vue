<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List
        :todos="todos"
        :deleltTodo="deleteTodo"
        :checkedTodo="checkedTodo"
      />
      <Footer v-if="todos.length" :todos="todos" :batchChecked="batchChecked" :clearCheckedTodos="clearCheckedTodos" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, List, Footer },
  data() {
    return {
      todos: [
        { id: "asdiekc01", title: "smoke", done: false },
        { id: "asdiekc02", title: "drink", done: true },
        { id: "asdiekc03", title: "gamble", done: true },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    checkedTodo(id) {
      // 遍历,如果id一致,则修改done的值,记得要赋值!
      this.todos.forEach((item) =>
        item.id === id ? (item.done = !item.done) : null
      );
    },
    batchChecked(value) {
      this.todos.forEach((item) => (item.done = value));
    },
    clearCheckedTodos() {
      this.todos = this.todos.filter((item) => !item.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>