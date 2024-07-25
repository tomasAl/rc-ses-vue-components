<template>
  <FieldWrapper
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <Checkbox v-model="model" v-bind="props" />
    </v-card>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import type { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

const props = withDefaults(defineProps<CheckboxFieldProps>(), {
  color: 'primary',
})

const model = defineModel<boolean>()
</script>
