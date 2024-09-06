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

import type { AlertProps } from '@/components/common/Alert/types'

import './style.scss'
import AlertDefaults from '@/components/common/Alert/defaults'

const props = withDefaults(defineProps<AlertProps>(), AlertDefaults)

const classes = computed(() => {
  return {
    'rc-alert-light': props.variant === 'light',
    'rc-alert-dark': props.variant === 'dark',
  }
})
</script>
