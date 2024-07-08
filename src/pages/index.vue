<template>
  <StepFormLayout :items="steps"></StepFormLayout>
</template>

<script setup lang="ts">
import IsdavimasForm from '@/components/forms/IsdavimasForm.vue'
import PapildomosPaslaugosForm from '@/components/forms/PapildomosPaslaugosForm.vue'
import PaslaugosUzsakymasForm from '@/components/forms/PaslaugosUzsakymasForm.vue'
import TerminaiForm from '@/components/forms/TerminaiForm.vue'

const steps = [
  {
    id: 'step1',
    title: 'Bazinė informacija',
    completed: true,
    active: false,
    expanded: false,
  },
  {
    id: 'step2',
    title: 'Paslaugos užsakymas',
    completed: false,
    active: true,
    expanded: true,
    component: PaslaugosUzsakymasForm,
  },
  {
    id: 'step3',
    title: 'Išdavimas',
    completed: false,
    active: false,
    expanded: false,
    component: IsdavimasForm,
  },
  {
    id: 'step4',
    title: 'Reikalingos papildomos paslaugos',
    completed: false,
    active: false,
    component: PapildomosPaslaugosForm,
  },
  {
    id: 'step5',
    title: 'Terminai ir sąlygos',
    completed: false,
    active: false,
    component: TerminaiForm,
  },
]
</script>
