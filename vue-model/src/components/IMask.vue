<template>
  <div
    class="mask"
    @click="maskClosable ? (dismiss = false) : (dismiss = true)"
    v-if="showMask"
  ></div>
</template>

<script>
export default {
  name: "IMask",
  props: {
    showMask: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: "showMask",
    event: "click",
  },
  computed: {
    dismiss: {
      set(val) {
        return this.$emit("click", val);
      },
      get() {
        return this.maskClosable;
      },
    },
  },
  methods: {},
};
</script>

<style>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>