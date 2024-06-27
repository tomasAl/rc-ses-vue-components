<template>
  <v-text-field v-model="model" :value="inputValue" @input="updateValue">
  </v-text-field>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
  value?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed(() => props.modelValue ?? props.value ?? '')

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = target.value

  emit('update:modelValue', newValue)
}

const model = defineModel()
model.value = props.value
</script>
