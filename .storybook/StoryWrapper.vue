<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script>
import '../src/styles/shared/index.scss'
import '../src/styles/shared/storybook.scss'
export default {
  props: {
    themeName: String,
  },
};
</script>

<style lang="scss">
.v-application__wrap {
  min-height: auto;
  height: auto;
}

.v-main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
