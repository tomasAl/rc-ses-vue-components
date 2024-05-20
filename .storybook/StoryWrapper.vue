<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
};
</script>

<style lang="scss">
.v-application__wrap {
  //min-height: 350px !important;
  height: 100vh;
}

.v-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
