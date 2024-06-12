<template>
  <div class="rc-searchable-area">
    <SearchField
      v-model="model"
      append-icon="$close"
      placeholder="Ieškoti"
      @click:append="model = ''"
    >
      <template #clear><span></span></template>
    </SearchField>
  </div>
</template>

<script setup lang="ts">
import './SearchableAreaStyle.scss'

const model = defineModel<string | number>()
</script>
