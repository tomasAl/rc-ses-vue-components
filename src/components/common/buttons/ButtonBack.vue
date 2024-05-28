<template>
  <v-btn variant="text" color="primary" class="text-body-3">
    <template #prepend>
      <CaretLeftIcon size="16" />
    </template>
    <slot/>
  </v-btn>
</template>

<script setup lang="ts">

import CaretLeftIcon from "../../../assets/icons/regular/CaretLeftIcon.vue";
</script>
