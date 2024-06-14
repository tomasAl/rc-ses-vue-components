<template>
  <Textfield
    v-model="model"
    prepend-inner-icon="$search"
    v-bind="props"
    @click:append="$emit('click:append', $event)"
  >
    <template #clear>
      <slot name="clear">
        <XCircleFilledIcon v-if="!props.readonly" @click="model = ''" />
      </slot>
    </template>

    <template #prepend><slot name="prepend" /></template>
  </Textfield>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import type { SearchFieldProps } from '@/types/inputs/SearchFieldProps'

defineEmits(['click:append'])
const props = defineProps<SearchFieldProps>()
const model = defineModel<string | number>()
</script>
