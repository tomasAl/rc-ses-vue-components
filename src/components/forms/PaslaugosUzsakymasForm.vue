<template>
  <Textfield class="form-control" label="Tikslas" description="pasiektas vo xuinia ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko" />
  <Textfield readonly class="form-control" label="Tikslas" description="pasiektas vo xuinia ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko" />
  <Textfield class="form-control" label="Tikslas" description="pasiektas" disabled />
  <Textfield label="Tikslas" error="input error" />
  <Button variant="tonal">Test</Button>
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
