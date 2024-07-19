<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <FileInput v-model="model" v-bind="props" />
  </FieldWrapper>
</template>

<script setup lang="ts">
import { FileInputFieldProps } from '@/types/inputs/FileInputProps'

const props = defineProps<FileInputFieldProps>()

const model = defineModel<File | File[] | null | undefined>()
</script>
