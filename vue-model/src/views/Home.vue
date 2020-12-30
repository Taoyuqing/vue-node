<template>
  <div class="home">
    <button @click="showMask = true">show mask</button>
    <IMask v-model="showMask"></IMask>
    <Tabs v-model="value">
      <Tab
        v-for="(item,index) in tabs"
        :title="item.title"
        :value="item.value"
        :key="'tabs' + index"
        >{{ item.title }}</Tab
      >
    </Tabs>
    <button @click="buttonclick">...</button>
  </div>
</template>

<script>
// @ is an alias to /src
import IMask from "@/components/IMask.vue";
import Tabs from "@/components/Tabs/index.vue";
import Tab from "@/components/Tab/index.vue";
export default {
  name: "Home",
  data() {
    return {
      showMask: false,
      value: "2",
      tabs: [],
    };
  },
  components: {
    IMask,
    Tabs,
    Tab,
  },
  mounted() {
    setTimeout(() => {
      this.tabs = [
        { title: "title1", value: "1" },
        { title: "title2", value: "2" },
      ];
    }, 1000);
  },
  methods: {
    buttonclick() {
      this.value = "1";
    },
  },
};
</script>
