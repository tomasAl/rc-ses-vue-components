<template>
  <v-tooltip class="rc-tooltip">
    <template v-if="$slots.activator" #activator="{ props }">
      <slot name="activator" v-bind="props" />
    </template>

    <template #default>
      test best test
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import './TooltipStyle.scss'
</script>
