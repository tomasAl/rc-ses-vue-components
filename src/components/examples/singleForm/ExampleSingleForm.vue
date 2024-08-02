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
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'

import UzsakymasForm from './UzsakymasForm.vue'

const steps = [
  {
    id: 'step2',
    title: 'Paslaugos užsakymo forma',
    active: true,
    expanded: true,
    component: UzsakymasForm,
  },
]
</script>
