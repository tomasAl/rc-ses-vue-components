<template>
  <!--    <Field v-slot="fieldProps" name="trumpas">
      <TextField
        v-bind="fieldProps.field"
        class="form-control"
        field-label="Trumpas tekstas"
        field-description="lorem ipsum."
        name="trumpas"
        placeholder="Tekstas"
        messages="Lorem Ipsum is simply dummy text."
        counter="10"
        :error="fieldProps.errorMessage"
      ></TextField>
    </Field>-->

  <TextField
    v-model="modelIlgasTekstas"
    v-bind="modelIlgasTekstasProps"
    class="form-control"
    field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    field-label="Ilgas tekstas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    name="ilgas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    counter="300"
    :error="errors.ilgas"
  ></TextField>

  <v-btn type="submit" color="primary" @click="submit">Submit</v-btn>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { Field, Form, useForm } from 'vee-validate'
import * as yup from 'yup'

const validationSchema = toTypedSchema(
  yup.object({
    // name: yup.string().required('Name is required'),
    // trumpas: yup.string().required('Trumpas is requierd'),
    ilgas: yup.string().required(),
  }),
)

const { errors, defineField, handleSubmit, submitForm, meta, values } = useForm({
  validationSchema,
})

const [modelIlgasTekstas, modelIlgasTekstasProps] = defineField('ilgas')

// const [modelTrumpasTekstas, modelTrumpasTekstasProps] = defineField('trumpas')

function onSubmit(values) {
  // alert(JSON.stringify(values, null, 2))
  console.log(values)
}

function submit(event: Event) {
  submitForm(event)
  console.log(meta.value)

  if (meta.value.valid) {
    onSubmit(values)
  }
}
</script>
