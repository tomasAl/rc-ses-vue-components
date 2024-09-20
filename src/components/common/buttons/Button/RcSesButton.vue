<template>
  <v-btn class="rc-btn" v-bind="props">
    <slot />

    <template v-if="$slots.append" #append>
      <slot name="append"></slot>
    </template>

    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>

    <template v-if="$slots.loader" #loader>
      <slot name="loader"></slot>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import ButtonDefaults from '@/components/common/buttons/Button/defaults'
import type { ButtonProps } from '@/components/common/buttons/Button/types'

import './style.scss'

const props = withDefaults(defineProps<ButtonProps>(), ButtonDefaults)
</script>
