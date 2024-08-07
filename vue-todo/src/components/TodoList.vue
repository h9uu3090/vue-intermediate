<!-- vueInit -->
<template lang="">
    <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <button v-on:click="toggleComplete(todoItem, index)">check</button>
          {{todoItem.item}}
          <button v-on:click="removeTodo(todoItem, index)">remove</button>
        </li>

      </ul>  
    </div>
</template>
<script>
export default {
    data : function () {
      return {
        todoItems: [],
      }
    },
    created : function() {
      if(localStorage.length > 0) {
        for (let index = 0; index < localStorage.length; index++) {
          console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
        }
      }
    },
    methods: {
      removeTodo : function(todoItem, index) {
        console.log(todoItem, index);
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      },
      toggleComplete : function(todoItem) {

        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    },
}
</script>
<style lang="">
</style>