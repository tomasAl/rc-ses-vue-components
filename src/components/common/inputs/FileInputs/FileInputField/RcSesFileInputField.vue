<template>
  <RcSesFieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <RcSesFileInput v-model="model" v-bind="props" />
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { FileInputFieldProps } from '@/components/common/inputs/FileInputs/FileInputField/type'

const props = defineProps<FileInputFieldProps>()

const model = defineModel<File | File[] | null | undefined>()
</script>
