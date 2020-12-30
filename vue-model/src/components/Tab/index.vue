<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    if (this.$parent.$options.name === "tabs") {
      this.$parent.upNaList();
    }
  },
};
</script>
<style lang="scss" scoped>
</style>