<template>
  <StepFormLayout :items="steps"></StepFormLayout>
</template>

<script setup lang="ts">

import PaslaugosUzsakymasForm from "../components/forms/PaslaugosUzsakymasForm.vue";

const panelData = [
  { id: 'pan1', title: 'Panel 1', disabled: false, completed: false, expanded: false, component: PaslaugosUzsakymasForm },
  { id: 'pan2', title: 'Panel 2', disabled: false, completed: false, expanded: true },
  { id: 'pan3', title: 'Panel 3', disabled: false, completed: false, expanded: false },
];

const panelData1 = [
  { id: 'pan-data-1-1', title: 'Panel 1', disabled: false, completed: false, expanded: false, component: PaslaugosUzsakymasForm },
  { id: 'pan-data-1-2', title: 'Panel 2', disabled: false, completed: false, expanded: true },
  { id: 'pan-data-1-3', title: 'Panel 3', disabled: false, completed: false, expanded: false },
];

const panelData2 = [
  { id: 'pan-data-2-1', title: 'Panel 111', disabled: false, completed: false, expanded: false },
  { id: 'pan-data-2-2', title: 'Panel 222', disabled: false, completed: false, expanded: false, component: PaslaugosUzsakymasForm },
  { id: 'pan-data-2-3', title: 'Panel 333', disabled: false, completed: false, expanded: false },
];

const steps = [
  { title: 'Bazinė informacija', completed: true, active: false, panels: panelData },
  { title: 'Paslaugos užsakymas', completed: true, active: false, panels: panelData1 },
  { title: 'Išdavimas', completed: false, active: true, panels: panelData2 },
  { title: 'Reikalingos papildomos paslaugos', completed: false, active: false },
  { title: 'Terminai ir sąlygos', completed: false, active: false },
]
</script>
