<template>
  <v-container class="pa-0">
    <v-card class="rcs-ft-container">
      <v-card-text class="rcs-ft-header">
        <v-card-title class="text-h5">{{ title }}</v-card-title>
        <slot />
      </v-card-text>
    </v-card>

    <FormActionPanel v-if="$slots.actions" class="mt-4">
      <slot name="actions"></slot>
    </FormActionPanel>

    <slot v-if="$slots['actions-after']" name="actions-after" />
  </v-container>
</template>

<script setup lang="ts">

import './ServiceFormTabContainerStyle.scss'

interface Props {
  title: string
}

withDefaults(defineProps<Props>(), {})
</script>
