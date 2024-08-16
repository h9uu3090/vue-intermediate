/* 강의 내용 .. 
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default store = new Vuex.Store({
    state : {
    }
});
*/

import { createStore } from 'vuex';

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for (let index = 0; index < localStorage.length; index++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }
      return arr;
    }
  }
}

export default createStore({
  state:{
    todoItems : storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed:false, item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, todoItem) {
        todoItem.completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
  actions: {},
})