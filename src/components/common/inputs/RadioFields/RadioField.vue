<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="label"
    :description="description"
    :for="name"
    variant="outlined"
  >
    <v-radio-group
      class="rc-radios"
      inline
      hide-details
    >
      <Radio
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        @click="model = option.value"
        :label="option.label"
      >
      </Radio>
    </v-radio-group>
  </FieldWrapper>
</template>

<script setup lang="ts">

// :class="{ 'v-btn--active': selectedOption === option.value }"
import { RadioFieldProps } from '@/types/inputs/RadioFieldProps'

import './RadioButtonsFieldStyle.scss'

withDefaults(defineProps<RadioFieldProps>(), {
  label: undefined,
  options: () => [],
  variant: 'text',
})

const model = defineModel<string>()

</script>
