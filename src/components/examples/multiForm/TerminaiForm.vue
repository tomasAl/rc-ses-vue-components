<template>
  <Checkbox v-model="checkModel">
    <template #label>
      <span class="font-weight-strong"
        >Užsakydamas darbus esu susipažinęs su darbų atlikimo ir atlyginimo tvarka ir
        įsipareigoju apmokėti už užsakytus darbus. Esu informuotas, kad per nurodytą
        terminą neapmokėjus apskaičiuoto mokesčio, darbų užsakymas per pasiriktą terminą
        nebus įvykdytas.</span
      >
    </template>
  </Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkModel = ref()
</script>
