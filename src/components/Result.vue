<template>
  <div>
    <p>Counter is : {{doubleCount}}</p>
    <p>Counter clicks: {{stringCounter}}</p>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {DOUBLE_COUNTER, STRING_COUNTER} from "@/store/counter/types";
import {counterModule} from "@/store/counter/counter";

const {mapGetters} = createNamespacedHelpers(counterModule);
// const {mapGetters: mapGett} = createNamespacedHelpers(anothermodule);

export default {
  name: 'Result',

  // props: {
  //   counter: {
  //     type: Number
  //   }
  // }


  computed: {
    ...mapGetters({
      doubleCount: DOUBLE_COUNTER,
      stringCounter: STRING_COUNTER
    })
    // counter() {
    //   return this.$store.getters.doubleCounter
    // }
  }
}
</script>

<!--mfdSDDFsdf: {-->
<!--emai: 'dfsafds',-->
<!--user: 'fsdafd'-->
<!--}-->

<!--email: 'fdsafd'.-->
<!--user: 'fsddf,-->
<!--id: 'mfdSDDFsdf'-->


<!--this.http.get('')-->
<!--  .then(res => {-->
<!--    res.json()-->
<!--}).then(res => {-->
<!--  for(let item in res) {-->
<!--  console.log(item);-->
<!--  console.log(res);-->
<!--  console.log(res[item])-->
<!--  this.users.push({...res[item], id: item})-->
<!--}-->
<!--})-->

<!--v-for(item)-->
<!--delete(item.id);-->


<!--delete() {-->

<!--}-->

<!--async deleted() {-->
<!-- try {-->
<!-- await this.htpp.delete('');-->
<!--} catch (e) {-->
<!--console.log(e)-->
<!--} finnally {-->
<!--this.users = [];-->
<!--this.get()-->
<!--}-->
<!--}-->