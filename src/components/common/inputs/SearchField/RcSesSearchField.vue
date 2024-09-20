<template>
  <RcSesTextField v-model="model" v-bind="props">
    <template #clear>
      <slot name="clear">
        <XCircleFilledIcon
          v-if="!props.readonly"
          :color="error ? 'error-600' : 'grey-900'"
          @click="model = ''"
        />
      </slot>
    </template>

    <template v-if="$slots['append']" #append="binds">
      <slot name="append" v-bind="binds" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner="binds">
      <slot name="append-inner" v-bind="binds" />
    </template>
    <template v-if="$slots['counter']" #counter="binds">
      <slot name="counter" v-bind="binds" />
    </template>
    <template v-if="$slots['loader']" #loader="binds">
      <slot name="loader" v-bind="binds" />
    </template>
    <template v-if="$slots['prepend']" #prepend="binds">
      <slot name="prepend" v-bind="binds" />
    </template>
    <template #prepend-inner>
      <v-icon icon="$search" />
    </template>
  </RcSesTextField>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import SearchFieldDefaults from '@/components/common/inputs/SearchField/defaults'
import type { SearchFieldProps } from '@/components/common/inputs/SearchField/type'
import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

const props = withDefaults(defineProps<SearchFieldProps>(), SearchFieldDefaults)
const model = defineModel<string | number | undefined>()
</script>
