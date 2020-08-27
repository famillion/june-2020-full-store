import {DECREMENT, DECREMENT_ACTION, INCREMENT, INCREMENT_ACTION} from "@/store/counter/types";

export const actions = {
  [INCREMENT_ACTION]: ({commit}, {time, value}) => {
    setTimeout(() => {
      commit(INCREMENT, value)
    }, time)
    // const users = [];
    // this.$http(fds).then(res => {
    //   this.users.push(res)
    // });
    // commit('setTodo', users)
  },

  [DECREMENT_ACTION]: ({commit}, payload) => {
    setTimeout(() => {
      commit(DECREMENT, payload.value)
    }, payload.time)
  }
}