<template>
  <v-table class="rc-table my-5 mx-5 bg-grey-50">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Variant</th>
        <th class="text-left">Price</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in items" :key="index">
        <template v-if="item.variants">
          <tr
            v-for="(variant, variantIndex) in item.variants"
            :key="`${index}-${variantIndex}`"
            :class="{ 'last-item': index === items.length - 1 }"
          >
            <td v-if="variantIndex === 0" :rowspan="item.variants.length">
              {{ item.name }}
            </td>
            <td>{{ variant.name }}</td>
            <td>{{ variant.price }}</td>
          </tr>
        </template>
        <tr v-else>
          <td>{{ item.name }}</td>
          <td></td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { TableProps } from './TableProps'
import './TableStyles.scss'

defineProps<TableProps>()
</script>
