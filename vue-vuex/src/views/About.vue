<template>
  <div>this is about {{count}}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style>
</style>

