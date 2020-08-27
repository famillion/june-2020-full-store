<template>
  <div>
    <button @click="increment(2)">Increment</button>
    <button @click="decrement(2)">Decrement</button>
    <hr>
    <button @click="actionInc({value: 5, time: 2000})">Async increment</button>
    <button @click="actionDec({value: 5, time: 5000})">Async decrement</button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {DECREMENT, DECREMENT_ACTION, INCREMENT, INCREMENT_ACTION} from "@/store/counter/types";
import {counterModule} from "@/store/counter/counter";

const {mapMutations, mapActions} = createNamespacedHelpers(counterModule);
// const {mapMutations: {mapSessionMutations}, mapActions: {mapSessionAction}} = createNamespacedHelpers(sessionModule);

export default {
  name: 'Counter',

  methods: {
    ...mapMutations({
      increment: INCREMENT,
      decrement: DECREMENT
    }),

    ...mapActions({
      actionInc: INCREMENT_ACTION,
      actionDec: DECREMENT_ACTION
    }),

    // ...mapSessionMutations({
    //
    // }),

    // action() {
    //   this.$store.dispatch('incrementAction');
    // }
    // increment() {
    //   this.$store.commit('increment');
    //   // this.$emit('updated', 1);
    //   // не можна
    //   // this.$store.state.counter++
    // },
    //
    // decrement() {
    //   this.$store.commit('decrement');
    //   // this.$emit('updated', -1);
    //   // this.$store.state.counter--
    // }
  }
}
</script>