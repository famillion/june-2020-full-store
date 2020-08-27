import {DOUBLE_COUNTER, STRING_COUNTER} from "@/store/counter/types";

export const getters = {
  [DOUBLE_COUNTER]: state => {
    return state.counter * 2
  },
  [STRING_COUNTER]: state => {
    return state.counter + ' Clicks'
  }
}