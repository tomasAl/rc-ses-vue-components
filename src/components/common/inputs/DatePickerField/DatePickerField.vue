<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <DatePicker v-model="model" v-bind="props" />
  </FieldWrapper>
</template>

<script setup lang="ts">
import { DatePickerFieldProps } from '@/types/inputs/DatePickerProps'

const props = defineProps<DatePickerFieldProps>()

const model = defineModel<any>()
</script>
