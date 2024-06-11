<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <v-select
      ref="selectField"
      v-model="model"
      :name="name"
      class="rc-select-field"
      variant="outlined"
      :placeholder="placeholder"
      :items="items"
      :hide-details="!error"
      :error="!!error"
      :error-messages="error"
      :active="false"
      :menu-props="{ offset: 6, class: 'rc-searchable-menu', location: 'bottom' }"
    >
      <template #prepend-item>
        <SearchableArea />
      </template>
    </v-select>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import SearchableArea from '@/components/common/inputs/shared/SearchableArea/SearchableArea.vue'
import { SelectProps } from '@/types/inputs/SelectProps'

import './SelectFieldStyle.scss'

withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  color: undefined,
  label: undefined,
  description: undefined,
  placeholder: undefined,
  error: undefined,
  name: undefined,
})

const model = defineModel<string>()

const selectField = ref()
</script>
