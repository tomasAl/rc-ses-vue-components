<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <v-select
      ref="selectRef"
      v-model="model"
      :name="name"
      class="rc-select-field"
      variant="outlined"
      :placeholder="placeholder"
      :items="computedItems"
      :hide-details="!error"
      :error="!!error"
      :error-messages="error"
      :menu-props="menuProps"
      :readonly="readonly"
      :disabled="disabled"
    >
      <template #prepend-item>
        <SearchableArea v-if="searchable" v-model="searchValue" />
      </template>

      <template #item="{ item, props }">
        {{ test(item, props) }}
        <v-list-item
          v-bind="props"
          class="rc-menu-list-item"
          :subtitle="item.raw.subtitle"
          append-icon="$checkPrimary"
        />
      </template>
    </v-select>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import SearchableArea from '@/components/common/inputs/shared/SearchableArea/SearchableArea.vue'
import type { SelectFieldProps } from '@/types/inputs/SelectFieldProps'

import './SelectFieldStyle.scss'

const selectProps = withDefaults(defineProps<SelectFieldProps>(), {
  disabled: false,
  color: undefined,
  label: undefined,
  description: undefined,
  placeholder: undefined,
  error: undefined,
  name: undefined,
  searchable: false,
  items: () => [],
})

const model = defineModel<string>()

const selectRef = ref()
const searchValue = ref<string>()
const menuProps = ref({
  offset: 6,
  class: { 'rc-searchable-menu': selectProps.searchable },
})

const testItems = [
  { title: 't1', value: 't1', subtitle: 's1' },
  { title: 't2', value: 't2', subtitle: 's2' },
  { title: 't3', value: 't3' },
  { title: 't4', value: 't4' },
  { title: 'a4', value: 'a4' },
  { title: 'b4', value: 'b4' },
]

const computedItems = computed(() => {
  if (!searchValue.value) {
    return testItems
  }

  return testItems
  // return testItems.filter((item: string) => item.includes(<string>searchValue.value))
})

const test = (item, props) => {
  console.log('test', item, props)
}

</script>
