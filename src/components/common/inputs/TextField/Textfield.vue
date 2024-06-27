<template>
  <FieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
    :tooltip="fieldTooltip"
  >
    <v-text-field
      v-model="modelValue"
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
      @input="$emit('input', $event)"
    >
      <template v-if="$slots.clear" #clear><slot name="clear" /></template>
      <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
      <template v-if="$slots.append" #append><slot name="append" /></template>
    </v-text-field>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { TextFieldProps } from '@/types/inputs/TextFieldProps'

import './TextfieldStyle.scss'

const props = withDefaults(defineProps<TextFieldProps>(), {
  name: undefined,
  disabled: false,
  error: undefined,
  type: 'text',
  fieldLabel: undefined,
  fieldDescription: undefined,
  fieldTooltip: undefined,

  prependInnerIcon: undefined,
  appendIcon: undefined,
  value: undefined,
})

defineEmits(['click:append', 'blur', 'focus', 'input'])

const modelValue = defineModel<string>()
modelValue.value = props.value
</script>
