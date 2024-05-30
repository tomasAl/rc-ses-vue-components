<template>

  <SelectField
    class="form-control"
    label="Tikslas"
    :items="['test1', 'test2', 'test3']"
    v-model="selectModel"
  />

  <SelectField
    label="Tikslas"
    :items="['test1', 'test2', 'test3']"
    v-model="selectModel"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import FormControl from "../common/forms/FormControl.vue";

const selectModel = ref('test1')

</script>
