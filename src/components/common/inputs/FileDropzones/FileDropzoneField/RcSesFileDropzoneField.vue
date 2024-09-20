<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <RcSesFileDropzone v-model="model" v-bind="props" />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesFileDropzone from '@/components/common/inputs/FileDropzones/FileDropzone/RcSesFileDropzone.vue'
import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzones/FileDropzoneField/type'

const props = defineProps<FileDropzoneFieldProps>()

const model = defineModel<any>()
</script>
