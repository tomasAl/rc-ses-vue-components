<template>
  <v-text-field
    v-model="model"
    :value="inputValue"
    @input="updateValue"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    hide-details
  >
    <template v-if="$slots.clear" #clear><slot name="clear" /></template>
  </v-text-field>
</template>

<script setup lang="ts">
import useFieldMixin from './shared/FieldMixin'

const props = defineProps<{
  modelValue?: string
  value?: string
}>()

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const { inputValue, updateValue, modelRef } = useFieldMixin(props, emit)

const model = defineModel<any>()
model.value = modelRef.value
</script>
