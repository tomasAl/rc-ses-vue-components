<template>
  <Textfield
    v-model="model"
    prepend-inner-icon="$search"
    v-bind="props"
    @click:append="$emit('click:append', $event)"
  >
    <template #clear>
      <XCircleFilledIcon @click="model = ''" />
    </template>
  </Textfield>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import { TextfieldProps } from '@/types/inputs/TextFieldProps'

type SearchFieldProps = Omit<TextfieldProps, 'prependInnerIcon'>

defineEmits(['click:append'])
const props = defineProps<SearchFieldProps>()
const model = defineModel<string | number>()
</script>
