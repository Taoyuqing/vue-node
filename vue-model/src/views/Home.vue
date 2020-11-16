<template>
  <div class="home">
    <button @click="showMask = true">show mask</button>
    <IMask v-model="showMask"></IMask>
  </div>
</template>

<script>
// @ is an alias to /src
import IMask from "@/components/IMask.vue";

export default {
  name: "Home",
  data(){
    return {
      showMask:false
    }
  },
  components: {
    IMask,
  },
};
</script>
