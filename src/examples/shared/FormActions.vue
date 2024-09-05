<template>
  <Button
    variant="text"
    color="primary-700"
    prepend-icon="$prev"
    class="font-weight-regular"
    >Baigti pildyti vėliau</Button
  >
  <div class="flex-grow-1" />
  <Button size="large" class="text-body-2 font-weight-strong" @click="submit">
    Pridėti į krepšelį
    <template #append>
      <ArrowRightIcon color="grey-900" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/assets/icons/regular/ArrowRightIcon.vue'
import UseFormType from '@/types/forms/UseFormType'

const formController = inject<UseFormType>('formController')

const submit = () => {
  if (formController) {
    formController.submitForm()

    if (formController.meta.value.valid) {
      console.log('Form is valid', formController.values)
    }
  }
}
</script>
