<template>
  <FieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <Checkbox
        :model-value="modelValue"
        v-bind="$attrs"
        :value="value"
        :label="label"
        :error="error"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </v-card>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import CheckboxDefaults from '@/components/common/inputs/CheckboxField/CheckboxDefaults'
import type { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<CheckboxFieldProps>(), CheckboxDefaults)

defineEmits(['update:modelValue'])
</script>
