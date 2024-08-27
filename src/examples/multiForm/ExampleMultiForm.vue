<template>
  <ServiceFormContainer :accordion-controller="accordionController">
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <Accordion
        id="isdavimasForm"
        v-model="expandedPanels"
        title="Išdavimas"
        :completed="false"
      >
        <IsdavimasForm />
      </Accordion>

      <Accordion
        id="papildomosPaslaugosForm"
        v-model="expandedPanels"
        title="Papildomos paslaugos"
        :completed="false"
      >
        <PapildomosPaslaugosForm />
      </Accordion>

      <Accordion
        id="paslaugosForm"
        v-model="expandedPanels"
        title="Paslaugos"
        :completed="false"
      >
        <PaslaugosUzsakymasForm />
      </Accordion>

      <Accordion
        id="terminaiForm"
        v-model="expandedPanels"
        title="Terminai"
        :completed="false"
      >
        <TerminaiForm />
      </Accordion>
    </template>
  </ServiceFormContainer>
</template>
<script setup lang="ts">
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import IsdavimasForm from '@/examples/multiForm/IsdavimasForm.vue'
import PapildomosPaslaugosForm from '@/examples/multiForm/PapildomosPaslaugosForm.vue'
import PaslaugosUzsakymasForm from '@/examples/multiForm/PaslaugosUzsakymasForm.vue'
import TerminaiForm from '@/examples/multiForm/TerminaiForm.vue'
import FormActionsAfter from '@/examples/shared/FormActionsAfter.vue'

const expandedPanels = ref<Array<string>>(['paslaugosForm'])

const accordionController = useAccordionController({
  basicForm: {
    expanded: false,
    state: 'completed',
    title: 'Bazinė informacija',
  },
  serviceForm: {
    expanded: true,
    state: 'pending',
    title: 'Paslaugos užsakymas',
  },
  issueForm: {
    expanded: false,
    state: 'completed',
    title: 'Išdavimas',
  },
  additionalServicesForm: {
    expanded: false,
    state: 'completed',
    title: 'Reikalingos papildomos paslaugos',
  },
  termsForm: {
    expanded: false,
    state: 'completed',
    title: 'Terminai ir sąlygos',
  },
})
</script>
