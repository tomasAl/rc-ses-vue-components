<template>
  <v-container>
    <v-row>
      <v-col md="4" lg="3" xl="2" class="d-none d-md-flex">
        <VerticalStepper :items="steps" style="margin-top: 2.875rem"></VerticalStepper>
      </v-col>
      <v-col sm="12" md="8" lg="9" xl="10">
        <FormWrapper :panels="panelData" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">


import PaslaugosUzsakymasForm from "../forms/PaslaugosUzsakymasForm.vue";
import {VerticalStepperProps} from "../../types/steppers/VerticalStepperProps";
import {StepFormLayoutProps} from "../../types/layouts/StepFormLayoutProps";
import {computed} from "vue";

/*const steps = [
  { title: 'Bazinė informacija', completed: true },
  { title: 'Paslaugos užsakymas', completed: true, active: false },
  { title: 'Išdavimas', completed: false, active: false },
  { title: 'Reikalingos papildomos paslaugos', completed: false, active: true },
  { title: 'Terminai ir sąlygos', completed: false, active: false },
];

const panelData = [
  { id: 'pan1', title: 'Panel 1', disabled: false, completed: false, expanded: false, component: PaslaugosUzsakymasForm },
  { id: 'pan2', title: 'Panel 2', disabled: false, completed: false, expanded: true },
  { id: 'pan3', title: 'Panel 3', disabled: false, completed: false, expanded: false },
  // Add more panel configurations as needed
];*/

const props = defineProps<StepFormLayoutProps>();

const { }
//const steps = computed(() =>



</script>
