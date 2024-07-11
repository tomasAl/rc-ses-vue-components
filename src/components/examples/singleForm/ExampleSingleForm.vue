<template>
  <StepFormLayout :items="steps" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>
  </StepFormLayout>
</template>
<script setup lang="ts">
import PaslaugosUzsakymasForm from '@/components/examples/multiForm/PaslaugosUzsakymasForm.vue'
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'

const steps = [
  {
    id: 'step2',
    title: 'Paslaugos užsakymo forma',
    active: true,
    expanded: true,
    component: PaslaugosUzsakymasForm,
  },
]
</script>
