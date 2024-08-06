<template>
  <Form @submit="onSubmit">
    <v-text-field v-model="email" v-bind="emailProps" :error-messages="errors.email" label="Email" />
    <v-btn type="submit">Submit</v-btn>
  </Form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { Form, useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email(),
})

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(schema),
})

const [email, emailProps] = defineField('email')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
