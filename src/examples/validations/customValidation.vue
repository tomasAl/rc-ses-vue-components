<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field v-model="email" label="Email" :error-messages="errors.email" />
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

// Custom validator function
const isValidDomain = (value: string) => {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
  return domainRegex.test(value.split('@')[1])
}

// Create a custom Yup validator
yup.addMethod(yup.string, 'validDomain', function (message) {
  return this.test('valid-domain', message, function (value) {
    const { path, createError } = this

    return isValidDomain(value) || createError({ path, message })
  })
})

// Extend Yup's StringSchema type to include the new method
declare module 'yup' {
  interface StringSchema {
    validDomain(message: string): StringSchema
  }
}

// Define the validation schema
const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .validDomain('Invalid email domain'),
})

// Use vee-validate's useForm and useField
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const { value: email } = useField('email')

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
})
</script>
