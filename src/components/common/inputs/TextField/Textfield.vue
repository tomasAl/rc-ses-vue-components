<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
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
      @focus="$emit('focus', $event)"
    >
      <template #clear><slot name="clear" /></template>
      <template #prepend><slot name="prepend" /></template>
      <template #append><slot name="append" /></template>
    </v-text-field>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { TextFieldProps } from '@/types/inputs/TextFieldProps'

import './TextfieldStyle.scss'

const props = withDefaults(defineProps<TextFieldProps>(), {
  name: undefined,
  label: undefined,
  description: undefined,
  disabled: false,
  error: undefined,
  type: 'text',

  prependInnerIcon: undefined,
  appendIcon: undefined,
})

const { fieldLabel, fieldDescription, ...textFieldProps } = props

defineEmits(['click:append', 'blur', 'focus'])

const model = defineModel<string | number>()
</script>
