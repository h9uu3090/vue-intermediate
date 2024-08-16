<!-- vueInit -->
<template lang="">
    <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="shadow">
          <button v-on:click="toggleComplete({todoItem, index})">check</button>
          {{todoItem.item}}
          <button v-on:click="removeTodo({todoItem, index})">remove</button>
        </li>
      </transition-group>   
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    
    methods: {
      ...mapMutations({
        removeTodo: 'removeOneItem',
        toggleComplete : 'toggleOneItem',
      }),
      // removeTodo : function(todoItem, index) {
      //   this.$store.commit('removeOneItem', {todoItem, index});
      // },
      // toggleComplete : function(todoItem) {
      //   this.$store.commit('toggleOneItem', todoItem);
      // }
      },
      computed : {
        // todoItems() {
        //   return this.$store.getters.storedTodoItems;
        // }
        ...mapGetters(['storedTodoItems']),
        ...mapState(['todoItems']),
    }
}
</script>
<style>
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
/* list-enter(vue2) */
.list-enter-from, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>