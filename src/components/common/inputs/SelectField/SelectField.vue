<template>
  <div class="field-wrapper">
    <label class="text-subtitle-1">Test</label>
    <label class="text-subtitle-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</label>
    <v-select
      variant="outlined"
      placeholder="some some"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import './SelectFieldStyle.scss';

export type Props = {
  /** Color of the button */
  //color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";

  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

