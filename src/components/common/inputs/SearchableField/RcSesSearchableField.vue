<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <RcSesTextField
      v-model="model"
      v-bind="$attrs"
      :error="error"
      :disabled="disabled"
      :readonly="readonly"
      @click="openModal"
    >
      <template #prepend-inner>
        <v-icon icon="$search" @click.stop="openModal" />
      </template>
      <template #append-inner>
        <XCircleFilledIcon
          v-if="model"
          :color="error ? 'error-600' : 'grey-900'"
          @click.stop="clearValue"
        />
      </template>
    </RcSesTextField>
  </RcSesFieldWrapper>

  <component
    :is="modalComponent"
    v-model="modalOpen"
    v-bind="modalProps"
    :on-close="closeModal"
    :on-submit="submitModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

import { SearchableFieldProps } from './type'

defineOptions({
  inheritAttrs: false,
})

const model = defineModel<string | number | undefined>()

defineProps<SearchableFieldProps>()

const modalOpen = ref(false)

const openModal = () => {
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}

const submitModal = (value: string) => {
  model.value = value
  closeModal()
}

const clearValue = () => {
  model.value = undefined
}
</script>
