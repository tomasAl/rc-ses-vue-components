<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <RcSesFileInput v-model="model" v-bind="props" />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesFileInput from '@/components/common/inputs/FileInputs/FileInput/RcSesFileInput.vue'
import { FileInputFieldProps } from '@/components/common/inputs/FileInputs/FileInputField/type'

const props = defineProps<FileInputFieldProps>()

const model = defineModel<File | File[] | null | undefined>()
</script>
