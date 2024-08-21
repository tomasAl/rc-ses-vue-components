<template>
  <ServiceFormContainer :items="steps">
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
import IsdavimasForm from '@/components/examples/multiForm/IsdavimasForm.vue'
import PapildomosPaslaugosForm from '@/components/examples/multiForm/PapildomosPaslaugosForm.vue'
import PaslaugosUzsakymasForm from '@/components/examples/multiForm/PaslaugosUzsakymasForm.vue'
import TerminaiForm from '@/components/examples/multiForm/TerminaiForm.vue'
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'

const expandedPanels = ref<Array<string>>(['paslaugosForm'])

const steps = [
  {
    id: 'step1',
    title: 'Bazinė informacija',
    completed: true,
    active: false,
  },
  {
    id: 'step2',
    title: 'Paslaugos užsakymas',
    completed: false,
    active: true,
  },
  {
    id: 'step3',
    title: 'Išdavimas',
    completed: false,
    active: false,
  },
  {
    id: 'step4',
    title: 'Reikalingos papildomos paslaugos',
    completed: false,
    active: false,
  },
  {
    id: 'step5',
    title: 'Terminai ir sąlygos',
    completed: false,
    active: false,
  },
]
</script>
