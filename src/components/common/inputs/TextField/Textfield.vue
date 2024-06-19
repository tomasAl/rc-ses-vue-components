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
      :prepend-inner-icon="prependInnerIcon"
      :append-icon="appendIcon"
      @click:append="$emit('click:append', $event)"
      @blur="$emit('blur', $event)"
    >
      <template #clear><slot name="clear" /></template>
      <template #prepend><slot name="prepend" /></template>
    </v-text-field>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { TextFieldProps } from '@/types/inputs/TextFieldProps'

import './TextfieldStyle.scss'

withDefaults(defineProps<TextFieldProps>(), {
  name: undefined,
  label: undefined,
  description: undefined,
  disabled: false,
  error: undefined,
  type: 'text',

  prependInnerIcon: undefined,
  appendIcon: undefined,
})

defineEmits(['click:append', 'blur'])

const model = defineModel<string | number>()
</script>
