<template>
  <RcSesFieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <RcSesFileDropzone v-model="model" v-bind="props" />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzones/FileDropzoneField/type'

const props = defineProps<FileDropzoneFieldProps>()

const model = defineModel<any>()
</script>
