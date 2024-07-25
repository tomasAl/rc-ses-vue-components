<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
    :variant="variant"
  >
    <v-radio-group
      v-model="model"
      v-bind="vRadioGroupProps"
      class="rc-radios"
      inline
      :disabled="disabled"
      :readonly="readonly"
      :error="!!error"
      :hide-details="!error"
      :error-messages="error"
    >
      <Radio
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :label="option.label"
      >
      </Radio>
    </v-radio-group>
  </FieldWrapper>
</template>

<script setup lang="ts">
import type { VRadioGroup } from 'vuetify/components'

import { RadioFieldProps } from '@/types/inputs/RadioFieldProps'

import './RadioButtonsFieldStyle.scss'

withDefaults(defineProps<RadioFieldProps>(), {
  options: () => [],
  variant: 'text',
  // VRadioGroupProps: () => ({}) as Partial<VRadioGroup['$props']>,
} as const)

const model = defineModel<string>()
</script>
