<template>
  <Form @submit="onSubmit">
    <v-text-field v-model="name" :error-messages="nameErrors" label="Name" />
    <v-text-field v-model="email" :error-messages="emailErrors" label="Email" />
    <v-text-field v-model="age" :error-messages="ageErrors" label="Age" type="number" />
    <v-btn type="submit">Submit</v-btn>
  </Form>
</template>

<script setup lang="ts">
import { defineRule, useField, useForm } from 'vee-validate'

// Define custom rules
defineRule('required', (value: any) => {
  if (!value || !value.length) {
    return 'This field is required'
  }
  return true
})

defineRule('email', (value: any) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})

defineRule('minLength', (value: any, [limit]: any) => {
  if (!value || value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

defineRule('minValue', (value: any, [limit]: any) => {
  if (value === undefined || value === null || value < limit) {
    return `This field must be at least ${limit}`
  }
  return true
})

const { handleSubmit } = useForm()

const { value: name, errorMessage: nameErrors } = useField<string>('name', (value) => {
  if (!value || !value.length) {
    return 'Name is required'
  }
  if (value.length < 3) {
    return 'Name must be at least 3 characters'
  }
  return true
})

const { value: email, errorMessage: emailErrors } = useField<string>(
  'email',
  'required|email',
)

const { value: age, errorMessage: ageErrors } = useField<number>('age', (value) => {
  if (Number.isNaN(value) || value < 18) {
    return 'Age must be at least 18'
  }
  if (value > 120) {
    return 'Age must be less than 120'
  }
  return true
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
