<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <FileDropzone v-model="model" v-bind="props" />
  </FieldWrapper>
</template>

<script setup lang="ts">

import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzoneField/FileDropzoneType'

const props = defineProps<FileDropzoneFieldProps>()

const model = defineModel<any>()
</script>
