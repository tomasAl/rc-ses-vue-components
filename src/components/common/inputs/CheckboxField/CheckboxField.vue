<template>
  <FieldWrapper
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
    :class="classes"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <Checkbox
        v-model="model"
        v-bind="attrs"
        :value="value"
        :label="label"
        :error="error"
      />
    </v-card>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { useAttrs, withDefaults } from 'vue'

import CheckboxDefaults from '@/components/common/inputs/CheckboxField/CheckboxDefaults'
import type { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

const { class: classes, ...attrs } = useAttrs()

withDefaults(defineProps<CheckboxFieldProps>(), CheckboxDefaults)

const model = defineModel<boolean>()
</script>
