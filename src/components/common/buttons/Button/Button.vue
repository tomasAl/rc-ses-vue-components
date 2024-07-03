<template>
  <v-btn class="rc-btn" v-bind="props">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { ButtonProps } from '@/types/common/ButtonProps'

import './ButtonStyle.scss'

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'tonal',
})
</script>
