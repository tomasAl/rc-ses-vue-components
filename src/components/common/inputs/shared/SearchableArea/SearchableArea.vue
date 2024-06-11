<template>
  <div class="rc-searchable-area">
    <SearchField v-model="model" append-icon="$close" @click:append="model = ''" />
  </div>
</template>

<script setup lang="ts">
import './SearchableAreaStyle.scss'

const model = defineModel<string | number>()
</script>
