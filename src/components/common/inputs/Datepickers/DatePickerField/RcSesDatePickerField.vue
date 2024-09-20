<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <RcSesDatePicker
      v-model="model"
      v-bind="$attrs"
      :range="range"
      :max-width="maxWidth"
      :placeholder="placeholder"
      :name="name"
      :error="error"
      :disabled="disabled"
      :readonly="readonly"
    />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesDatePicker from '@/components/common/inputs/Datepickers/DatePicker/RcSesDatePicker.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import { DatePickerFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

defineProps<DatePickerFieldProps>()
const model = defineModel<any>()
</script>
