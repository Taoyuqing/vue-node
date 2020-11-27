<template>
  <div>
    <slot :user="user">
      {{user.lastName}}
    </slot>
  </div>
</template>

<script>
export default {
  name: "componentsC",
  data(){
      return {
          user:{
              lastName :"componentsC",
              firstName  :"AAAAAAcomponentsC",
          }
      }
  }
};
</script>

<style>
</style>