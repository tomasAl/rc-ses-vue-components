<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <NumberStepper
      v-model="model"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :readonly="readonly"
    />
  </FieldWrapper>
</template>


<script setup lang="ts">
import { withDefaults } from 'vue'
import { NumberStepperProps } from '@/types/inputs/NumberStepperProps'

withDefaults(defineProps<NumberStepperProps>(), {
  disabled: false,
  min: 1,
  step: 1,
})

const model = defineModel<string | number | undefined>()

</script>
