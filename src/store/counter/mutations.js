import {DECREMENT, INCREMENT} from "@/store/counter/types";

export const mutations = {
  [INCREMENT]: (state, value) => {
    state.counter +=value
  },

  [DECREMENT]: (state, value) => {
    state.counter -=value
  },
}