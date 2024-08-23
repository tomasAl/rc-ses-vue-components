<template>
  <ServiceFormContainer :accordionController="accordionController" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <Accordion
        id="singleForm"
        state="completed"
      >
        <UzsakymasForm />
      </Accordion>
    </template>
  </ServiceFormContainer>
</template>
<script setup lang="ts">
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'

import UzsakymasForm from './UzsakymasForm.vue'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'

const accordionController = useAccordionController({
  singleForm: {
    expanded: true,
    state: 'completed',
    title: 'Bazinė informacija',
  }
})
</script>
