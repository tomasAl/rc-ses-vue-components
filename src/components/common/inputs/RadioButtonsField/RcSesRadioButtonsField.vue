<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
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
      <RcSesButton
        v-for="(option, index) in options"
        :key="index"
        class="no-focus v-btn--variant-glow"
        :class="{ 'v-btn--active': selectedOption === option.value }"
        :value="option.value"
        variant="outlined"
        color="grey"
        :disabled="disabled"
        :readonly="readonly"
        @click="model = option.value"
      >
        {{ option.label }}
      </RcSesButton>
    </v-radio-group>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import RcSesError from '@/components/common/Error/RcSesError.vue'
import RcSesButton from '@/components/common/buttons/Button/RcSesButton.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import { RadioButtonsFieldProps } from '@/components/common/inputs/RadioButtonsField/type'

import RadioButtonsFieldDefaults from './defaults'
import './style.scss'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<RadioButtonsFieldProps>(), RadioButtonsFieldDefaults)

const model = defineModel<string>()

const selectedOption = computed(() => {
  return model.value ? model.value : null
})
</script>
