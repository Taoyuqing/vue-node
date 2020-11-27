<template>
  <div class="home">
    {{ count }}
    <button @click="add">+</button>
    <button @click="asyncAdd">async +</button>
    <div>
      <input type="text" v-model="inputContent" />
      <button @click="submit">提交</button>
      <h1>提交的内容：{{ content }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["count", "content"]),
  },
  data() {
    return {
      inputContent: "",
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    asyncAdd(){
      this.$store.dispatch("asyncIncrement",10)
    },
    submit() {
      this.$store.commit("submitContent", this.inputContent);
    },
  },
};
</script>
