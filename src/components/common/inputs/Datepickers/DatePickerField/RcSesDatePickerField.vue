<template>
  <RcSesFieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
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
import { DatePickerFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

defineProps<DatePickerFieldProps>()
const model = defineModel<any>()
</script>
