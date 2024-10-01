<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <RcSesCheckbox v-model="model" v-bind="$attrs" :label="label" :error="undefined" />
    </v-card>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import RcSesError from '@/components/common/Error/RcSesError.vue'
import RcSesCheckbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import CheckboxDefaults from '@/components/common/inputs/Checkboxes/Checkbox/defaults'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import './style.scss'
import { CheckboxFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<CheckboxFieldProps>(), CheckboxDefaults)

const model = defineModel<boolean>()
</script>
