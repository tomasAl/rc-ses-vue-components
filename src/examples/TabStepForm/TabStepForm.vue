<template>
  <ServiceFormTabContainer title="test 123">
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <v-tabs v-model="tab" class="rc-tabs">
        <Tab
          v-for="item in items"
          :key="item.value"
          variant="outlined"
          @click="tab = item.value"
        >
          {{ item.title }}
        </Tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item.value" class="rcs-ft-window">
          <component :is="item.component"></component>
        </v-window-item>
      </v-window>
    </template>
  </ServiceFormTabContainer>
</template>

<script setup lang="ts">
import UzsakymasTabForm from '@/examples/TabStepForm/UzsakymasTabForm.vue'
import FormActions from '@/examples/shared/FormActions.vue'
import FormActionsAfter from '@/examples/shared/FormActionsAfter.vue'

const items = [
  { title: 'Fizinis asmuo', value: 0 },
  { title: 'Juridinis asmuo', value: 1 },
  {
    title: 'Advokatų, antstolių kontora, notarų biuras',
    value: 2,
    active: true,
    component: UzsakymasTabForm,
  },
  { title: 'Advokatų biuras', value: 3 },
  { title: 'Notarų biuras', value: 4 },
  { title: 'Biuras', value: 5 },
  { title: 'Siuras', value: 6 },
]

const activeTab = items.filter((x) => x.active)
const tab = ref<string | number>(activeTab[0]?.value ?? 0)
</script>
