<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-radios-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
    :variant="variant"
  >
    <v-radio-group
      v-model="model"
      v-bind="$attrs"
      class="rc-radios"
      :inline="inline"
      :disabled="disabled"
      :readonly="readonly"
      :hide-details="true"
    >
      <RcSesRadio
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :label="option.label"
      >
      </RcSesRadio>
    </v-radio-group>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesError from '@/components/common/Error/RcSesError.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesRadio from '@/components/common/inputs/Radios/Radio/RcSesRadio.vue'
import RadioFieldDefaults from '@/components/common/inputs/Radios/RadioFields/defaults'
import { RadioGroupFieldProps } from '@/components/common/inputs/Radios/RadioFields/type'

import './style.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<RadioGroupFieldProps>(), RadioFieldDefaults)

const model = defineModel<string | undefined>()
</script>
