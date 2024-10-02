<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <RcSesNumberStepper
      v-model="model"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :readonly="readonly"
      :error="error"
      :max-width="maxWidth"
    />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesNumberStepper from '@/components/common/inputs/NumberSteppers/NumberStepper/RcSesNumberStepper.vue'
import { NumberStepperFieldProps } from '@/components/common/inputs/NumberSteppers/NumberStepperField/type'

withDefaults(defineProps<NumberStepperFieldProps>(), {
  disabled: false,
  min: 1,
  max: Infinity,
  step: 1,
})

const model = defineModel<string | number | undefined>()
</script>
