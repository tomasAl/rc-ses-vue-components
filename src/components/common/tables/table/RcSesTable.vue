<template>
  <v-container class="rc-container rc-container-center">
    <v-table class="rc-table rc-container-content">
      <slot />
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import './TableStyles.scss'
</script>
