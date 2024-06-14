<template>
  <Textfield
    class="form-control"
    label="Tikslas"
    error="bla"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />
  <Textfield
    class="form-control"
    label="Tikslas"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />
  <Textfield
    readonly
    class="form-control"
    label="readonly"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />

  <SelectField
    v-model="selectModel"
    class="form-control"
    label="Tikslas"
    searchable
    :multiple="true"
    :items="[
      { title: 'test1', value: 't1' },
      { title: 'test2', value: 't2' },
      { title: 'test3', value: 't3' },
      { title: 'test4', value: 't4' },
      { title: 'laba', value: 'lab' },
      { title: 'krab', value: 'krab' },
    ]"
  />

  <Textfield class="form-control" label="Tikslas" description="pasiektas" disabled />
  <Textfield label="Tikslas" error="input error" />
  <Button variant="tonal">Test</Button>
  <SelectField
    label="Tikslas"
    name="tikslas"
    :items="[
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
    ]"
  />

  <v-select :items="['vienas', 'du', 'trys', 'keturi', 'penki']" multiple></v-select>

  <input v-maska="'#-#'" />
  <v-text-field v-maska="'#-#'"></v-text-field>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { ref } from 'vue'

const selectModel = ref()
</script>
