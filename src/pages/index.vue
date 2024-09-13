<template>
  <RcSesHeader
    drop-shadow
    :breadcrumbs="['Pradžia', 'Pavyzdžiai']"
    title="Formų bei komponentų pavyzdžiai"
    description="Formos ir komponentai yra esminės bet kokios vartotojo sąsajos dalys, kurios padeda kurti sąveiką tarp vartotojo ir programos. Formos yra struktūrizuoti laukai, skirti duomenų įvedimui, pavyzdžiui, prisijungimo vardai, slaptažodžiai ar atsiliepimai. Jos gali būti paprastos, su keletu teksto laukų, arba sudėtingos, apimantys įvairias parinktis, tokias kaip išskleidžiami sąrašai ar radijo mygtukai. Komponentai yra pakartotinai naudojami UI elementai, tokie kaip mygtukai, etiketės, perjungikliai ir slankikliai, kurie padeda standartizuoti ir optimizuoti vartotojo sąsajos kūrimą. Kartu šie elementai formuoja naudotojui draugiškas sąsajas, leidžiančias efektyviai ir patogiai bendrauti su programinės įrangos funkcijomis."
  >
  </RcSesHeader>
  <v-container>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.value"
        append-icon="$next"
        @click="router.push(item.routeTo)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <RcSesButton color="primary" @click="dialog = true">Click</RcSesButton>
    <SearchModal v-model="dialog" />

    <RcSesSearchableField v-model="search" :modal-component="ModalInfo" />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import RcSesButton from '@/components/common/buttons/Button/RcSesButton.vue'
import RcSesSearchableField from '@/components/common/inputs/SearchableField/RcSesSearchableField.vue'
import RcSesHeader from '@/components/layouts/Header/RcSesHeader.vue'
import ModalInfo from '@/examples/modals/ModalInfo.vue'
import SearchModal from '@/examples/modals/SearchModal.vue'

const dialog = ref(false)
const search = ref('')

const router = useRouter()

const items = ref([
  {
    title: 'Vienos formos pavyzdys',
    value: 1,
    routeTo: '/singleForm',
  },
  {
    title: 'Kelių formų pavyzdys',
    value: 2,
    routeTo: '/multiForm',
  },
  {
    title: 'Skirtuko tipo formos pavyzdys',
    value: 3,
    routeTo: '/tabForm',
  },
  {
    title: 'Duomenų lentelės pavyzdys',
    value: 4,
    routeTo: '/dataTable',
  },
])
</script>
