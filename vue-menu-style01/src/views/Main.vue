<template>
  <div class="container">
    <div class="left" id="nav">
      <div><router-link to="/home">Home</router-link></div>
      <div>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}
.left {
  height: 100vh;
  background-color: #ededed;
  width: 200px;
  float: left;
}
.right {
  width: calc(100vw - 200px);
  background-color: #999999;
  height: 100vh;
  float: left;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>