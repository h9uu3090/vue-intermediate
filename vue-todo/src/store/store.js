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

export default createStore({
  state:{
    headerText: 'test header'
  },
  mutations: {},
  actions: {},
  getters: {}
})