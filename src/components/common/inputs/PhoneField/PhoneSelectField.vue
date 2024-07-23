<template>
  <FieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :for="name"
  >
    <v-select
      ref="selectRef"
      v-model="selectedCountry"
      v-bind="$attrs"
      :name="name"
      class="rc-field rc-phone-select-field"
      variant="outlined"
      :placeholder="placeholder"
      :items="countries"
      item-title="name"
      item-value="iso"
      :hide-details="!error"
      :error="!!error"
      :error-messages="error"
      :menu-props="menuProps"
      :readonly="readonly"
      :disabled="disabled"
      transition="scroll-y-transition"
      @update:menu="updateVList"
    >
      <template v-if="selectedCountry" #prepend-inner>
        <IconFlag :iso="selectedCountry" class="mr-2" />
      </template>
      <template #item="{ item, props }">
        <v-list-item v-bind="props" class="rc-menu-list-item">
          <template #prepend>
            <IconFlag :iso="item.raw.iso" class="mr-2" />
          </template>
          <template #title> {{ item.raw.name }} ({{ item.raw.code }}) </template>
          <template #subtitle></template>
        </v-list-item>
      </template>
    </v-select>
    <v-text-field
      v-model="phoneNumber"
      v-maska="mask"
      :placeholder="'Enter phone number'"
      class="mt-2"
    />
  </FieldWrapper>
</template>

<script setup lang="ts">
import countries from 'countries-phone-masks'
import { vMaska } from 'maska/vue'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref } from 'vue'

import type { SelectFieldProps } from '@/types/inputs/SelectFieldProps'
import IconFlag from '@/assets/icons/IconFlag.vue'

import './PhoneFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

interface Country {
  name: string
  code: string
  iso: string
  flag: string
  mask: string
}

withDefaults(defineProps<SelectFieldProps>(), {
  disabled: false,
  placeholder: 'Select country',
  error: undefined,
  name: undefined,
})

const selectedCountry = ref<string | undefined>(undefined)
const phoneNumber = ref('')
const selectRef = ref()

const menuId = uuidv4()
const menuProps = ref({
  id: menuId,
  offset: 6,
  class: 'rc-phone-select-menu',
})

console.log('all countries', countries)

const mask = computed(() => {
  const country = countries.find(({ iso }) => iso === selectedCountry.value?.iso)
  return country ? country.mask : ''
})

const updateVList = () => {
  setTimeout(() => {
    const menu = document.getElementById(menuId)
    if (!menu) return
    const list = menu.querySelector('.v-list')
    if (!list) return
    if (list.scrollHeight > list.clientHeight) {
      list.classList.add('rc-scrollable')
    } else {
      list.classList.remove('rc-scrollable')
    }
  }, 200)
}
</script>

<style scoped>
.rc-phone-select-field {
  width: 200px; /* Adjust as needed */
}
</style>
