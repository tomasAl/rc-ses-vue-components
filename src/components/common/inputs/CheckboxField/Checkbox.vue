<template>
  <v-checkbox
    v-model="model"
    class="rc-checkbox"
    :class="classes"
    :name="name"
    :color="color"
    :disabled="disabled"
    :hide-details="!error"
    :error="!!error"
    :error-messages="error"
  >
    <template #label>
      <slot name="label"><slot>{{ content }}</slot></slot>
    </template>
  </v-checkbox>
</template>


<script setup lang="ts">
import './CheckboxFieldStyle.scss'
import { withDefaults } from 'vue'
import { CheckboxProps } from '@/types/inputs/CheckboxFieldProps'

withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  color: 'primary',
  label: undefined,
})

const model = defineModel<boolean>()
const classes = computed(() => {
  return {
    'rc-checkbox--checked': model.value
  }
})

</script>
