<template>
  <div>
    <v-text-field
      ref="input"
      v-model="inputValue"
      class="rc-field rc-phone-input-field"
      hide-details
      @click:append="openMenu"
    ></v-text-field>
    <v-menu
      v-model="menu"
      :activator="input"
      :close-on-content-click="false"
      :transition="'slide-y-transition'"
      offset="6"
      max-height="300"
      class="rc-card-menu"
    >
<!--      <v-list elevation="4" :items="countries" item-title="name" item-value="iso">
        <template #prepend="{ item }">
          <IconFlag iso="AX" />
        </template>
      </v-list>-->

      <v-virtual-scroll
        :items="countries"
        height="300"
        item-height="48"
      >
        <template #default="{ item }">
          <v-list-item :key="item.iso" @click="selectItem(item)">
            <template #prepend>
              <IconFlag :iso="item.iso" />
            </template>
            {{ item.name }}
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import countries from 'countries-phone-masks'
import { ref } from 'vue'

import IconFlag from '@/assets/icons/IconFlag.vue'

interface Country {
  name: string
  code: string
  iso: string
  flag: string
  mask: string
}

const inputValue = ref('')
const menu = ref(false)
const input = ref<Element | undefined>(undefined)

const itemsPerPage = 20
const currentPage = ref(1)

const visibleCountries = computed(() => {
  return countries.slice(0, currentPage.value * itemsPerPage)
})

const loadMoreItems = (indexes: number[]) => {
  if (indexes[indexes.length - 1] >= visibleCountries.value.length - 5) {
    currentPage.value += 1
  }
}

// Methods
const openMenu = () => {
  menu.value = true
}

const closeMenu = () => {
  setTimeout(() => {
    menu.value = false
  }, 200)
}

const selectItem = (country: Country) => {
  inputValue.value = country.iso
  menu.value = false
}
</script>

<style scoped>
/* Add any required styles here */
</style>
