<template>
  <div class="px-5 py-5">
    <Test></Test>
    <FormWrapper :panels="panelData">
      <template #panel-pan2="{ title }">
        <!-- Slot content for Panel 2 -->
        <h1>{{ title }}</h1>
        <p>Content for Panel 2</p>
      </template>

    </FormWrapper>
  </div>
</template>


<script setup lang="ts">

import PaslaugosUzsakymasForm from "../components/forms/PaslaugosUzsakymasForm.vue";

const panelData = [
  { id: 'pan1', title: 'Panel 1', disabled: false, completed: false, expanded: false, component: PaslaugosUzsakymasForm },
  { id: 'pan2', title: 'Panel 2', disabled: false, completed: false, expanded: true },
  { id: 'pan3', title: 'Panel 3', disabled: false, completed: false, expanded: false },
  // Add more panel configurations as needed
];
</script>
