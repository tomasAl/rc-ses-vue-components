<template>
  <TabbedPanel
    title="test 123"
    :items="[
      { title: 'Fizinis asmuo', value: 0, component: UzsakymasTabForm },
      { title: 'Juridinis asmuo', value: 1, component: UzsakymasTabForm },
      { title: 'Advokatų, antstolių kontora, notarų biuras', value: 2, active: true },
      { title: 'Advokatų biuras', value: 3 },
      { title: 'Notarų biuras', value: 4 },
      { title: 'Biuras', value: 5 },
      { title: 'Siuras', value: 6 },
    ]"
  >
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>
  </TabbedPanel>
</template>
<script setup lang="ts">
import FormActionsAfter from '@/components/examples/shared/FormActionsAfter.vue'
import UzsakymasTabForm from '@/components/examples/tabbedForm/UzsakymasTabForm.vue'
</script>
