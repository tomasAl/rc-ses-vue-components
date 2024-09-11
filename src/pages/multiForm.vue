<template>
  <RcSesHeader
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
  </RcSesHeader>
  <MultiStepForm />
</template>

<script setup lang="ts">
import RcSesHeader from '@/components/layouts/Header/RcSesHeader.vue'
import MultiStepForm from '@/examples/MultiStepForm/MultiStepForm.vue'
</script>
