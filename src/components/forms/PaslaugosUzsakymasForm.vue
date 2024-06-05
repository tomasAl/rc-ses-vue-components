<template>
  <Textfield label="Tikslas" description="pasiektas" />
  <Textfield label="Tikslas" description="pasiektas" />

  <SelectField
    v-model="selectModel"
    class="form-control"
    label="Tikslas"
    :items="['test1', 'test2', 'test3']"
  />

  <SelectField
    v-model="selectModel"
    label="Tikslas"
    :items="['test1', 'test2', 'test3']"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectModel = ref('test1')
</script>
