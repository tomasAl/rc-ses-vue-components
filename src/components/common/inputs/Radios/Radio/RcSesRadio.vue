<template>
  <v-radio class="rc-radio" v-bind="props" :class="classes" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import RadioDefaults from '@/components/common/inputs/Radios/Radio/defaults'
import { RadioProps } from '@/components/common/inputs/Radios/Radio/type'

import './style.scss'

const props = withDefaults(defineProps<RadioProps>(), RadioDefaults)

const classes = computed(() => {
  return {
    'rc-radio--checked': props.modelValue,
    'rc-radio--readonly': props.readonly,
  }
})
</script>
