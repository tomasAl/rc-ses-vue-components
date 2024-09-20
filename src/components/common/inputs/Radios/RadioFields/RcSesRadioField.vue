<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
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
      :error="!!error"
      :hide-details="!error"
      :error-messages="error"
    >
      <RcSesRadio
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :label="option.label"
      >
      </RcSesRadio>
    </v-radio-group>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesRadio from '@/components/common/inputs/Radios/Radio/RcSesRadio.vue'
import RadioFieldDefaults from '@/components/common/inputs/Radios/RadioFields/defaults'
import { RadioGroupFieldProps } from '@/components/common/inputs/Radios/RadioFields/type'

import '../../RadioButtonsField/style.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<RadioGroupFieldProps>(), RadioFieldDefaults)

const model = defineModel<string | undefined>()
</script>
