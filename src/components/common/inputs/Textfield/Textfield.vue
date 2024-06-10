<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <v-text-field
      v-model="model"
      :name="name"
      class="rc-text-field"
      variant="outlined"
      :disabled="disabled"
      :placeholder="placeholder"
      :error="!!error"
      :hide-details="!error"
      :error-messages="error"
      :readonly="readonly"
      :type="type"
    />
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { FieldProps } from '@/types/inputs/FieldProps'
import { InputType } from '@/types/inputs/InputType'

import './TextfieldStyle.scss'

export type TextfieldProps = FieldProps & {
  type?: InputType
}

withDefaults(defineProps<TextfieldProps>(), {
  name: undefined,
  label: undefined,
  description: undefined,
  disabled: false,
  error: undefined,
  type: 'text',
})

const model = defineModel<string | number>()
</script>
