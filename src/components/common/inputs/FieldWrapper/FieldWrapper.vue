<template>
  <div class="rc-field-wrapper">
    <div class="rc-field-labels">
      <label v-if="label" :for="props.for" class="text-subtitle-1 text-md-h6">
        {{ label }}
      </label>
      <label v-if="description" :for="props.for" class="text-subtitle-2">
        {{ description }}
      </label>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import './FieldWrapper.scss'

type Props = {
  label?: string
  description?: string
  for?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  for: undefined,
})
</script>
