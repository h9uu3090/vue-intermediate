<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems : [],
    }
  },
  created() {
    if(localStorage.length > 0) {
      for (let index = 0; index < localStorage.length; index++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed:false, item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
  },

  components : {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<template>
  <TodoHeader></TodoHeader>
  <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
  <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
  <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
</template>

<style>
body {
  text-align: center;
  background-color:#F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
