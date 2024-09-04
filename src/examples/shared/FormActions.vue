<template>
  <Button
    variant="text"
    color="primary-700"
    prepend-icon="$prev"
    class="font-weight-regular"
    >Baigti pildyti vėliau</Button
  >
  <div class="flex-grow-1" />
  <Button size="large" class="text-body-2 font-weight-strong" @click="submitForm">
    Pridėti į krepšelį
    <template #append>
      <ArrowRightIcon color="grey-900" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

import ArrowRightIcon from '@/assets/icons/regular/ArrowRightIcon.vue'

const formController = inject<ReturnType<typeof useForm> | undefined>('formController')

if (!formController) {
  throw new Error('Form controller is not provided')
}

const { submitForm } = formController
</script>
