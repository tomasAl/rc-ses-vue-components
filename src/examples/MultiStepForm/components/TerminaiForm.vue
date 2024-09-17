<template>
  <RcSesCheckbox
    v-model="modelTerminoSutikimas"
    v-bind="modelTerminoSutikimasProps"
    :error="errors?.terminoSutikimas"
  >
    <template #label>
      <span class="font-weight-strong"
        >Užsakydamas darbus esu susipažinęs su darbų atlikimo ir atlyginimo tvarka ir
        įsipareigoju apmokėti už užsakytus darbus. Esu informuotas, kad per nurodytą
        terminą neapmokėjus apskaičiuoto mokesčio, darbų užsakymas per pasiriktą terminą
        nebus įvykdytas.</span
      >
    </template>
  </RcSesCheckbox>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import RcSesCheckbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import UseFormType from '@/types/forms/UseFormType'

const formController = inject<UseFormType>('formController')

if (!formController) {
  throw new Error('Form controller is not provided')
}

const { errors, defineField } = formController

const [modelTerminoSutikimas, modelTerminoSutikimasProps] =
  defineField('terminoSutikimas')
</script>
