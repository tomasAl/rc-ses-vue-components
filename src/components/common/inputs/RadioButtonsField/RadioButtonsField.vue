<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :for="name"
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
      <v-btn
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'v-btn--active': selectedOption === option.value }"
        :value="option.value"
        variant="outlined"
        :disabled="disabled"
        :readonly="readonly"
        @click="model = option.value"
      >
        {{ option.label }}
      </v-btn>
    </v-radio-group>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { RadioButtonsFieldProps } from '@/components/common/inputs/RadioButtonsField/RadioButtonsFieldProps'

import RadioFieldDefaults from '../RadioFields/RadioFieldDefaults'
import './RadioButtonsFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<RadioButtonsFieldProps>(), RadioFieldDefaults)

// withDefaults(defineProps<RadioFieldProps>(), RadioFieldDefaults)

const model = defineModel<string>()

const selectedOption = computed(() => {
  return model.value ? model.value : null
})
</script>
