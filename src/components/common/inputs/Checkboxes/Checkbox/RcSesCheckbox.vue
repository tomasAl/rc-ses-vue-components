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
    :readonly="readonly"
    :placeholder="placeholder"
    :label="label"
  >
    <template v-if="$slots.label" #label="labelProps">
      <slot name="label" v-bind="labelProps">{{ label }}</slot>
    </template>
  </v-checkbox>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'

import CheckboxDefaults from '@/components/common/inputs/Checkboxes/Checkbox/defaults'
import type { CheckboxProps } from '@/components/common/inputs/Checkboxes/Checkbox/types'

import './style.scss'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CheckboxProps>(), CheckboxDefaults)

const model = defineModel<any>()

if (props.value) {
  model.value = props.value
}

const classes = computed(() => {
  return {
    'rc-checkbox--checked': model.value,
  }
})
</script>
