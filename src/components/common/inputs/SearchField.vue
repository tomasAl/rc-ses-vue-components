<template>
  <TextField
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

    <template v-if="$slots['append']" #append="binds"
      ><slot name="append" v-bind="binds"
    /></template>
    <template v-if="$slots['append-inner']" #append-inner="binds"
      ><slot name="append-inner" v-bind="binds"
    /></template>
    <template v-if="$slots['counter']" #counter="binds"
      ><slot name="counter" v-bind="binds"
    /></template>
    <template v-if="$slots['loader']" #loader="binds"
      ><slot name="loader" v-bind="binds"
    /></template>
    <template v-if="$slots['prepend']" #prepend="binds"
      ><slot name="prepend" v-bind="binds"
    /></template>
    <template v-if="$slots['prepend-inner']" #prepend-inner="binds"
      ><slot name="prepend-inner" v-bind="binds"
    /></template>
  </TextField>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import type { SearchFieldProps } from '@/types/inputs/SearchFieldProps'

defineEmits(['click:append'])
const props = defineProps<SearchFieldProps>()
const model = defineModel<string | number>()

/* let reactiveProps = reactive({ ...props })
reactiveProps['prepend-inner-icon'] = '$search'
let alteredProps = toRefs(reactiveProps) */

</script>
