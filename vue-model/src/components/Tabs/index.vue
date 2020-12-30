<template>
  <div>
    <div>
      <button
        v-for="(item, index) in navList"
        :key="'nav' + index"
        @click="buttonClick(item)"
      >
        {{ item.title }}
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabs",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
      requied: true,
    },
  },
  data() {
    return {
      navList: [],
    };
  },
  watch: {
    value(val, oldVal) {
      this.getTab().forEach((item) => {
        if (val === item.value) {
          item.show = true;
        } else {
          item.show = false;
        }
      });
    },
  },
  mounted() {
  },
  methods: {
    buttonClick(item) {
      this.$emit("change", item.value);
    },
    getTab() {
      return this.$children.filter((item) => {
        return item.$options.name === "tab";
      });
    },
    upNaList() {
      this.navList = [];
      this.getTab().forEach((item, index) => {
        if (this.value === item.value) {
          item.show = true;
        }
        let obj = {
          title: item.title || "",
          value: item.value || "",
        };
        this.navList.push(obj);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>