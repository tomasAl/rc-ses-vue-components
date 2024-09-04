<template>
  <Checkbox
    v-model="modelTerminoSutikimas"
    v-bind="modelTerminoSutikimasProps"
    :error="errors.terminoSutikimas"
  >
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
import { useForm } from 'vee-validate'

type TerminaiFormProps = {
  formController: ReturnType<typeof useForm>
}

const props = defineProps<TerminaiFormProps>()

const { errors, defineField } = props.formController

const [modelTerminoSutikimas, modelTerminoSutikimasProps] =
  defineField('terminoSutikimas')
</script>
