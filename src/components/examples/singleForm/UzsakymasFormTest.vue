<template>
  <v-container>
    <VeeForm v-slot="{ handleSubmit }" :validation-schema="schema" as="div">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <Field v-slot="{ field, errors }" name="name">
              <v-text-field
                v-bind="field"
                label="Name"
                :error-messages="errors"
                outlined
              />
            </Field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Submit</v-btn>
      </form>
    </VeeForm>
  </v-container>
</template>

<script setup lang="ts">
import { Field, Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'

// Define validation schema using Yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
})

function onSubmit(values) {
  // Submit values to API...
  alert(JSON.stringify(values, null, 2))
  console.log(values)
  return false
}
</script>
