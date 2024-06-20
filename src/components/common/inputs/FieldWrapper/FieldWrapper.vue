<template>
  <div class="rc-field-wrapper">
    <div v-if="label || description" class="rc-field-labels">
      <label
        v-if="label"
        :for="props.for"
        class="text-subtitle-1 text-md-body-2 font-weight-medium"
      >
        {{ label }}
      </label>
      <label v-if="description" :for="props.for" class="text-subtitle-2">
        {{ description }}
      </label>
    </div>
    <div
      class="rc-field-content"
      :class="{ 'rc-field-content--variant-outlined': variant === 'outlined' }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import './FieldWrapper.scss'

type Props = {
  label?: string
  description?: string
  for?: string
  variant?: 'text' | 'outlined'
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  for: undefined,
  variant: 'text',
})
</script>
