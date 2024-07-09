<template>
  <HeaderPanel
    drop-shadow
    :breadcrumbs="['Savitarna', 'Paslaugos užsakymo forma']"
    title="Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą"
    description="Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
        pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
        galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
        padalinyje."
  >
  </HeaderPanel>
  <StepFormLayout :items="steps">
    <template #actions>
      <Button variant="text" color="primary-700" prepend-icon="$prev" class="font-weight-regular">Baigti pildyti vėliau</Button>
      <div class="flex-grow-1" />
      <Button size="large" class="text-body-2 font-weight-strong">
        Pridėti į krepšelį

        <template #append>
          <ArrowRightIcon color="grey-900"/>
        </template>
      </Button>
    </template>

    <template #actions-after>
      <div class="d-flex pt-4 justify-center">
        <Button variant="text" color="grey-600" class="text-decoration-underline">Atšaukti pildymą ir ištrinti formos duomenis</Button>
      </div>
    </template>
  </StepFormLayout>
</template>

<script setup lang="ts">
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'
import IsdavimasForm from '@/components/forms/IsdavimasForm.vue'
import PapildomosPaslaugosForm from '@/components/forms/PapildomosPaslaugosForm.vue'
import PaslaugosUzsakymasForm from '@/components/forms/PaslaugosUzsakymasForm.vue'
import TerminaiForm from '@/components/forms/TerminaiForm.vue'
import ArrowRightIcon from '@/assets/icons/regular/ArrowRightIcon.vue'

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
