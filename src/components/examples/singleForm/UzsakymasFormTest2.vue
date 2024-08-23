<template>
  <VeeForm
    v-slot="{ handleSubmit }"
    :validation-schema="validationSchema"
    @submit="onSubmit"
  >
    <form @submit="handleSubmit($event, onSubmit)">
      <Field v-slot="fieldProps" name="name">
        <v-text-field
          v-bind="fieldProps.field"
          label="Name"
          name="name"
          :error-messages="fieldProps.errors"
          outlined
        />
      </Field>

      <Field v-slot="fieldProps" name="trumpas">
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
      </Field>

      <!--    <TextField
        v-model="modelTrumpasTekstas"
        v-bind="modelTrumpasTekstasProps"
        class="form-control"
        field-label="Trumpas tekstas"
        field-description="lorem ipsum."
        name="trumpas"
        placeholder="Tekstas"
        messages="Lorem Ipsum is simply dummy text."
        counter="10"
        :errors="errors.trumpas"
      ></TextField>-->

      <button type="submit">Submit</button>
    </form>
  </VeeForm>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { Field, Form as VeeForm, useForm } from 'vee-validate'
import * as yup from 'yup'

const validationSchema = toTypedSchema(
  yup.object({
    name: yup.string().required('Name is required'),
    trumpas: yup.string().required('Trumpas is requierd'),
  }),
)

// const [modelTrumpasTekstas, modelTrumpasTekstasProps] = defineField('trumpas')

function onSubmit(values) {
  // alert(JSON.stringify(values, null, 2))
  console.log(values)
}
</script>
