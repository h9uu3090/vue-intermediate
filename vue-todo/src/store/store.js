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
import * as todoApp from './modules/todoApp';

export default createStore({
  modules : {
    todoApp
  }
})