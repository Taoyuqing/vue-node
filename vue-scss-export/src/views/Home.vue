<template>
  <div class="home">
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import colors from '@/styles/common.scss'

export default {
  name: "Home",
  components: {},
  mounted() {
    console.log(colors)
  },
  data(){
    return {
      isRead:false
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
