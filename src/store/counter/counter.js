import {state} from "@/store/counter/state";
import {actions} from "@/store/counter/actions";
import {mutations} from "@/store/counter/mutations";
import {getters} from "@/store/counter/getters";

// export default {
//   getters,
//   actions,
//   state,
//   mutations
// }

const namespaced = true;

export const counterModule = 'counter';

export const counter = {
  namespaced,
  getters,
  actions,
  state,
  mutations
}