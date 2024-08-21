<template>
  <ServiceFormContainer :items="steps" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <Accordion
        id="singleForm"
        v-model="expandedPanels"
        title="My accordion title"
        :completed="false"
      >
        <UzsakymasForm />
      </Accordion>
    </template>
  </ServiceFormContainer>
</template>
<script setup lang="ts">
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'

import UzsakymasForm from './UzsakymasForm.vue'

const steps = [
  {
    id: 'step2',
    title: 'Paslaugos užsakymo forma',
    active: true,
  },
]

const expandedPanels = ref<Array<string>>(['singleForm'])
</script>
