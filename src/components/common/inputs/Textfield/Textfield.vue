<template>
  <v-text-field variant="outlined" :disabled="disabled" />
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import './TextfieldStyle.scss';

export type Props = {
  /** Color of the button */
  //color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";

  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

