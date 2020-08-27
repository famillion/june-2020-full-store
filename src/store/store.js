// import Vue from 'vue';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);
//
// export const store = new Vuex.Store({
//   state: {
//     counter: 0,
//     // todo: []
//   },
//
//   getters: {
//     doubleCounter: state => {
//       return state.counter * 2
//     },
//     stringCounter: state => {
//       return state.counter + ' Clicks'
//     }
//   },
//
//   mutations: {
//     increment: (state, value) => {
//       state.counter +=value
//     },
//
//     decrement: (state, value) => {
//       state.counter -=value
//     },
//
//     // setTodo: (state, todo) => {
//     //   state.todo = todo;
//     // }
//   },
//
//   actions: {
//     incrementAction: ({commit}, {time, value}) => {
//       setTimeout(() => {
//         commit('increment', value)
//       }, time)
//       // const users = [];
//       // this.$http(fds).then(res => {
//       //   this.users.push(res)
//       // });
//       // commit('setTodo', users)
//     },
//
//     decrementAction: ({commit}, payload) => {
//       setTimeout(() => {
//         commit('decrement', payload.value)
//       }, payload.time)
//     }
//   }
// })


import Vue from 'vue';
import Vuex from 'vuex';
import {counterModule, counter} from "@/store/counter/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    [counterModule]: counter
  }
})

