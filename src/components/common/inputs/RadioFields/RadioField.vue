<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :for="name"
    :variant="variant"
  >
    <v-radio-group
      v-model="model"
      v-bind="$attrs"
      class="rc-radios"
      :inline="inline"
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

import RadioFieldDefaults from '@/components/common/inputs/RadioFields/RadioFieldDefaults'
import { RadioFieldProps } from '@/types/inputs/RadioFieldProps'

import './RadioButtonsFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<RadioFieldProps>(), RadioFieldDefaults)

const model = defineModel<string | undefined>()
</script>
