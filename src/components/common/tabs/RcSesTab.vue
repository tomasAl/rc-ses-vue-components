<template>
  <v-tab v-model="model" v-bind="props" class="rc-tab">
    <span class="rc-tab-title">
      <slot></slot>
    </span>
  </v-tab>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { TabProps } from '@/components/common/tabs/type'

const model = defineModel<never>()

const props = withDefaults(defineProps<TabProps>(), {
  value: '',
  variant: 'text',
})
</script>
