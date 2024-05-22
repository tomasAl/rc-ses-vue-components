<template>
  <v-btn :color="color" :loading="loading" :variant="variant">
    <!-- @slot To put any element inside the button-->
    <slot>
      {{ content }}
    </slot>
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { makeVBtnProps } from 'vuetify/lib/components/VBtn/VBtn.mjs';

const vBtnProps = makeVBtnProps();
console.log('prpos button', vBtnProps)

export type Props = {
  /** Color of the button */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";

  /** To show a loading icon */
  loading?: boolean;

  /** the content of the button */
  content?: string;

  variant?: 'tonal' | 'outlined'
};

withDefaults(defineProps<Props>(), {
  loading: false,
  variant: 'outlined',
  color: "primary",
  content: "Button",
});
</script>


<!--
example of usage
<style lang="scss">
@use '../../../styles/settings';

.test-new {
  height: settings.$button-height + 20;
}
</style>
-->
