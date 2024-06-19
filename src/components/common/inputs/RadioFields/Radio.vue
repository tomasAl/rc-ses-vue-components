<template>
  <v-radio class="rc-radio" v-bind="props" />
</template>

<script setup lang="ts">
import './RadioStyle.scss'
import { defineProps } from 'vue'
import { RadioProps } from '@/types/inputs/RadioProps'

const props = defineProps<RadioProps>()
</script>
