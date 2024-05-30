<template>
  <div class="field-wrapper">
    <label v-if="label" class="text-subtitle-1">{{ label }}</label>
    <label v-if="description" class="text-subtitle-2">{{ description }}</label>
    <v-select
      variant="outlined"
      :placeholder="placeholder"
      :items="items"
      v-model="model"
      :hide-details="!error"
      :error="error"
      :error-messages="error"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import './SelectFieldStyle.scss';
import {SelectProps} from "@/types/inputs/SelectProps";

withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  color: undefined,
  label: undefined,
  description: undefined,
  placeholder: undefined,
  error: undefined,
});

const model = defineModel<string>()
</script>

