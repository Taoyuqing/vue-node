<template>
  <div class="home">
    <componentF>
      <!-- 具名插槽 -->
      <template v-slot:header>
        <div>this is header</div>
      </template>
      <!-- 默认插槽 -->
      <div>this is default</div>
      <!-- 具名插槽 -->
      <template v-slot:footer>
        <!-- 作用于插槽 -->
        <componentC>
          <template v-slot="{ user }">
            <div>
              {{ user.firstName }}
            </div>
          </template>
        </componentC>
      </template>
    </componentF>
  </div>
</template>

<script>
import componentF from "../components/componentF";
import componentC from "../components/componentC";
export default {
  name: "Home",
  components: {
    componentF,
    componentC,
  },
};
</script>
