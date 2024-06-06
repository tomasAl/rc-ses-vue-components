<template>
  <FieldWrapper :label="label" :description="description">
    <v-text-field
      variant="outlined"
      :disabled="disabled"
      :placeholder="placeholder"
      :error="!!error"
      :hide-details="!error"
      :error-messages="error"
      :readonly="readonly"
      value="blah"
    />
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { FieldProps } from '@/types/inputs/FieldProps'

import './TextfieldStyle.scss'

export type Props = FieldProps & {
  /** Color of the button */
  // color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  disabled: false,
  error: undefined,
})
</script>
