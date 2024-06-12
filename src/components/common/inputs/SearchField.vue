<template>
  <Textfield
    v-model="model"
    prepend-inner-icon="$search"
    v-bind="props"
    @click:append="$emit('click:append', $event)"
  >
    <template #clear>
      <slot name="clear">
        <XCircleFilledIcon @click="model = ''" />
      </slot>
    </template>
  </Textfield>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import { SearchFieldProps } from '@/types/inputs/SearchFieldProps'

defineEmits(['click:append'])
const props = defineProps<SearchFieldProps>()
const model = defineModel<string | number>()
</script>
