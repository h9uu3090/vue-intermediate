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
  mutations: {},
  actions: {},
  getters: {}
})