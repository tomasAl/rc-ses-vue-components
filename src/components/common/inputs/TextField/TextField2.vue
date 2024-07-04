<template>
  <div class="wrapper">
    <v-text-field
      v-model="model"
      v-bind="props.fieldProps"
      class="rc-field rc-text-field"
      variant="outlined"
    >
      <template v-if="$slots['append']" #append="binds"
        ><slot name="append" v-bind="binds"
      /></template>
      <template v-if="$slots['append-inner']" #append-inner="binds"
        ><slot name="append-inner" v-bind="binds"
      /></template>
      <template v-if="$slots['clear']" #clear="binds"
        ><slot name="clear" v-bind="binds"
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
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { VTextField } from 'vuetify/components/VTextField'

import { TextFieldProps2 } from '@/types/inputs/TextFieldProps'

const props = withDefaults(defineProps<TextFieldProps2>(), {})

const model = defineModel<any>()
</script>
