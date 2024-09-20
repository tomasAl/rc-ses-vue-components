<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <RcSesCheckbox
        :model-value="modelValue"
        v-bind="$attrs"
        :value="value"
        :label="label"
        :error="error"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </v-card>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import RcSesCheckbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import CheckboxDefaults from '@/components/common/inputs/Checkboxes/Checkbox/defaults'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import { CheckboxFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<CheckboxFieldProps>(), CheckboxDefaults)

defineEmits(['update:modelValue'])
</script>
