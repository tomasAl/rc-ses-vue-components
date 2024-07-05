<template>
  <v-checkbox
    v-model="model"
    class="rc-checkbox"
    v-bind="fieldProps"
    :class="classes"
    :name="name"
    :color="color"
    :disabled="disabled"
    :hide-details="!error"
    :error="!!error"
    :error-messages="error"
    :readonly="readonly"
    :placeholder="placeholder"
    :label="label"
  >

  </v-checkbox>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { CheckboxProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  label: undefined,
})

const model = defineModel<boolean>()
const classes = computed(() => {
  return {
    'rc-checkbox--checked': model.value,
  }
})
</script>
