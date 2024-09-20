<template>
  <RcSesTextField
    v-model="modelPaslauga"
    v-bind="modelPaslaugaProps"
    :error="errors.paslauga"
    field-label="Paslaugos pavadinimas"
  />
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

type PapildomosPaslaugosFormProps = {
  formController: ReturnType<typeof useForm>
}

const props = defineProps<PapildomosPaslaugosFormProps>()

const { errors, defineField } = props.formController

const [modelPaslauga, modelPaslaugaProps] = defineField('paslauga')
</script>
