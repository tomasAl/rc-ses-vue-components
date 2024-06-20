<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="label"
    :description="description"
    :for="name"
    variant="outlined"
  >
    <v-radio-group class="rc-radios" inline hide-details>
      <Radio
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :label="option.label"
        @click="model = option.value"
      >
      </Radio>
    </v-radio-group>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { RadioFieldProps } from '@/types/inputs/RadioFieldProps'

import './RadioButtonsFieldStyle.scss'

withDefaults(defineProps<RadioFieldProps>(), {
  label: undefined,
  options: () => [],
  variant: 'text',
})

const model = defineModel<string>()
</script>
