<template>
  <TextField v-model="modelPaslauga" field-label="Paslaugos pavadinimas" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modelPaslauga = ref()
</script>
