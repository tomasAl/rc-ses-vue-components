<template>
  <v-table class="rc-table my-5 mx-5 bg-grey-50">
    <thead>
      <tr>
        <th class="text-left">Paslauga</th>
        <th class="text-left">Kaina, Eur*</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in services" :key="index">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.variants ? '' : item.price }}</td>
        </tr>
        <template v-if="item.variants">
          <tr
            v-for="(variant, variantIndex) in item.variants"
            :key="`${index}-${variantIndex}`"
          >
            <td>
              <span class="variant-name">{{ variant.name }}</span>
            </td>
            <td>{{ variant.price }}</td>
          </tr>
        </template>
      </template>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import './TableStyles.scss'

interface Variant {
  name: string
  price: number
}

interface Service {
  name: string
  price?: number
  variants?: Variant[]
}

interface Props {
  services: Service[]
}

const props = defineProps<Props>()

const services = ref<Service[]>([
  {
    name: 'Pastato, inžinerinio statinio vidutinės rinkos vertės nekilnojamojo turto mokesčiams ir kitoms reikmėms perskaičiavimas (atkuriamosios vertės metodu), įrašymas ar pateikimas ',
    price: 4.16,
  },
  {
    name: 'Patalpos vidutinės rinkos vertės nekilnojamojo turto mokesčiams ir kitoms reikmėms perskaičiavimas (atkuriamosios vertės metodu), įrašymas ar pateikimas',
    price: 4.73,
  },
  {
    name: 'Pastato, inžinerinio statinio vidutinės rinkos vertės nekilnojamojo turto mokesčiams ir kitoms reikmėms perskaičiavimas (atkuriamosios vertės metodu), įrašymas ar pateikimas ',
    variants: [
      {
        name: 'popierinė forma',
        price: 2.28,
      },
      {
        name: 'elektroninė forma',
        price: 1.86,
      },
    ],
  },
  {
    name: 'Nekilnojamojo daikto kadastro įrašo suformavimas ir pateikimas elektronine forma',
    price: 1.86,
  },
  {
    name: 'Nekilnojamojo daikto kadastro ir registro duomenų patikrinimas ir žymos apie duomenų patikslinimą suformavimas',
    price: 4.28,
  },
  {
    name: 'Nekilnojamojo turto kadastro žemėlapio ištrauka (ne ant ortofotografinio žemėlapio pagrindo)',
    variants: [
      {
        name: 'A4 formatas',
        price: 2.28,
      },
      {
        name: 'A3 formatas',
        price: 2.25,
      },
      {
        name: 'A2 formatas',
        price: 2.33,
      },
    ],
  },
])
</script>
