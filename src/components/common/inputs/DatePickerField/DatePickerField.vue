<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <DatePicker
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
  </FieldWrapper>
</template>

<script setup lang="ts">
import { DatePickerFieldProps } from '@/types/inputs/DatePickerProps'

defineOptions({
  inheritAttrs: false,
})

defineProps<DatePickerFieldProps>()
const model = defineModel<any>()
</script>
