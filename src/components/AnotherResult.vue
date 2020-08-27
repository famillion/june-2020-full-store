<template>
  <div>
    <p>Counter is : {{doubleCounter}}</p>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {DOUBLE_COUNTER} from "@/store/counter/types";
import {counterModule} from "@/store/counter/counter";

const {mapGetters} = createNamespacedHelpers(counterModule);

export default {
  name: 'AnotherResult',

  // props: {
  //   counter: {
  //     type: Number
  //   }
  // }

  computed: {
    ...mapGetters({
      doubleCounter: DOUBLE_COUNTER
    })
    // counter() {
    //   return this.$store.getters.doubleCounter
    // }
  }
}
</script>