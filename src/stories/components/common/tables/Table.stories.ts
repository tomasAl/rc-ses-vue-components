// RcSesTable.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesTable from '@/components/common/tables/table/RcSesTable.vue'
import { TableItem } from '@/components/common/tables/table/TableProps'

export default {
  title: 'components/common/tables/RcSesTable',
  component: RcSesTable,
} as Meta

const services = ref<TableItem[]>([
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

const Template: StoryFn = (args) => ({
  components: { RcSesTable },
  setup() {
    return { args, services }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesTable>
          <thead class="no-border">
          <tr class="bg-grey-100">
            <th class="text-left" colspan="2">Paslauga</th>
            <th class="text-center" style="width: 120px">Kaina, Eur</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(item, index) in services" :key="index">
            <template v-if="item.variants">
              <tr
                v-for="(variant, variantIndex) in item.variants"
                :key="index + '-' + variantIndex"
                :class="{ 'last-item': index === services.length - 1 }"
              >
                <td v-if="variantIndex === 0" :rowspan="item.variants.length">
                  {{ item.name }}
                </td>
                <td style="width: 200px">{{ variant.name }}</td>
                <td class="text-center">{{ variant.price }}</td>
              </tr>
            </template>
            <tr v-else>
              <td colspan="2">{{ item.name }}</td>
              <td class="text-center">{{ item.price }}</td>
            </tr>
          </template>
          </tbody>
        </RcSesTable>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
