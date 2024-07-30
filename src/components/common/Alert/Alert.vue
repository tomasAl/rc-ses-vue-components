<template>
  <v-alert
    class="rc-alert"
    v-bind="props"
    variant="flat"
    :class="classes"
  >
    <template #text>
      <slot>{{ text }}</slot>
    </template>
  </v-alert>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'

import type { AlertProps } from '@/types/common/AlertProps'

import './AlertStyle.scss'
import AlertDefaults from '@/components/common/Alert/AlertDefaults'

const props = withDefaults(defineProps<AlertProps>(), AlertDefaults)

const classes = computed(() => {
  return {
    'rc-alert-light': props.variant === 'light',
    'rc-alert-dark': props.variant === 'dark',
  }
})
</script>
