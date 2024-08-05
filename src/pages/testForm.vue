<script setup lang="ts">
import { useForm } from 'vee-validate'

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const { errors, defineField } = useForm({
  validationSchema: {
    email: (val) => (isEmail(val) ? true : 'Invalid email'),
  },
})

const [email, emailProps] = defineField('email')
const [name, nameProps] = defineField('name')
</script>

<template>
  <v-text-field
    v-model="email"
    v-bind="emailProps"
    :error="!!errors.email"
    :error-messages="errors.email"
    :rules="['required']"
  ></v-text-field>

  <v-text-field
    v-model="name"
    v-bind="nameProps"
    :error="!!errors.name"
    :error-messages="errors.name"
    :rules="['required']"
  ></v-text-field>
</template>
