<!-- vueInit -->
<template lang="">
    <div class="shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo">add</button>
      
      <AlertModal v-if="showModal" @close="showModal = false">
        <template v-slot:header><h3>경고!!</h3><botton @click="showModal = false">닫기</botton></template>
        
        <!-- 3.0이하 표현 -->
        <!-- <h3 slot="header">경고!!</h3> -->

        <template #body><h3>무언가를 입력하세요.</h3></template>
        <template #footer><h3>copy right</h3></template>
      </AlertModal>
    </div>
</template>
<script>
import AlertModal from './common/AlertModal.vue'

export default {
    data: function() {
      return {
        newTodoItem : "",
        showModal : false,
      }
    },

    methods: {
      addTodo : function() {
        if(this.newTodoItem != '') {
          this.$store.commit('addOneItem', this.newTodoItem);
          this.clearInput();
        }else {
          this.showModal = !this.showModal;
        }
      },
      
      clearInput: function() {
        this.newTodoItem = "";
      }, 
    },

    components : {
      AlertModal,
    }
}
</script>
<style lang="">
    
</style>