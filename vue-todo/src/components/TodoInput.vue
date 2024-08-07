<!-- vueInit -->
<template lang="">
    <div class="shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo">add</button>
    </div>
</template>
<script>
export default {
    data: function() {
      return {
        newTodoItem : ""
      }
    },

    methods: {
      addTodo : function() {
        console.log(this.newTodoItem);
        var obj = {completed:false, item:this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      },
      
      clearInput: function() {
        this.newTodoItem = "";
      },
    }
}
</script>
<style lang="">
    
</style>