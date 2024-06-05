<template>
  <FieldWrapper :label="label" :description="description">
    <v-text-field
      variant="outlined"
      :disabled="disabled"
      placeholder="Placeholder text"
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
})
</script>
