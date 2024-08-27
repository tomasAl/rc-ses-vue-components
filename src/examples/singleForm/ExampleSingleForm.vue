<template>
  <ServiceFormContainer :accordion-controller="accordionController" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <Accordion id="singleForm" state="completed">
        <UzsakymasForm />
      </Accordion>
    </template>
  </ServiceFormContainer>
</template>
<script setup lang="ts">
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import FormActionsAfter from '@/examples/shared/FormActionsAfter.vue'

import UzsakymasForm from './UzsakymasForm.vue'

const accordionController = useAccordionController({
  singleForm: {
    expanded: true,
    state: 'completed',
    title: 'Bazinė informacija',
  },
})
</script>
