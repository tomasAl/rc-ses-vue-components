<template>
  <RcSesFormContainer :accordion-controller="accordionController" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <RcSesAccordion id="singleForm">
        <UzsakymasForm />
      </RcSesAccordion>
    </template>
  </RcSesFormContainer>
</template>
<script setup lang="ts">
import RcSesAccordion from '@/components/common/Accordion/RcSesAccordion.vue'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesFormContainer from '@/components/layouts/FormContainer/RcSesFormContainer.vue'
import FormActions from '@/examples/shared/FormActions.vue'
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
