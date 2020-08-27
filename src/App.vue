<template>
  <div>
    <h1>Vuex</h1>
    <AnotherResult/>
    <Result/>
    <hr>
    <Counter/>
  </div>
</template>

<script>

import Result from "@/components/Result";
import Counter from "@/components/Counter";
import AnotherResult from "@/components/AnotherResult";
export default {
  name: 'App',
  components: {
    Result,
    Counter,
    AnotherResult
  },

  // data() {
  //   return {
  //     counter: 0
  //   }
  // }
}
</script>

<style>

</style>
