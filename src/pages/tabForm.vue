<template>
  <HeaderPanel
    drop-shadow
    :breadcrumbs="[
      {
        title: 'Pradžia',
        href: '/',
      },
      {
        title: 'Paslaugos užsakymo forma',
      },
    ]"
    title="Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą"
    description="Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
        pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
        galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
        padalinyje."
  >
  </HeaderPanel>
  <v-container>
    <TabbedPanel
      title="test 123"
      :items="[
        { title: 'Fizinis asmuo', value: 'asmuo' },
        { title: 'Juridinis asmuo', value: 'juridinis' },
        { title: 'Advokatų, antstolių kontora, notarų biuras', value: 'kontora', active: true },
        { title: 'Advokatų biuras', value: 3 },
        { title: 'Notarų biuras', value: 4 },
        { title: 'Biuras', value: 5 },
        { title: 'Siuras', value: 6 },
      ]"
    >
      <template #asmuo>
        test
      </template>

      <template #juridinis>
        juridinis
      </template>
    </TabbedPanel>
  </v-container>
</template>
<script setup lang="ts">
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'
</script>
