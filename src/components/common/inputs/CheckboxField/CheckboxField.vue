<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <v-card class="rc-checkbox-field bg-grey-50" color="grey" variant="outlined">
      <Checkbox
        v-model="model"
        v-bind="props"
      >
        <template #label>
          <slot name="label"><slot>{{ content }}</slot></slot>
        </template>
      </Checkbox>
    </v-card>
  </FieldWrapper>
</template>


<script setup lang="ts">
import './CheckboxFieldStyle.scss'
import { withDefaults } from 'vue'
import { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'
import Checkbox from '@/components/common/inputs/CheckboxField/Checkbox.vue'

const props = withDefaults(defineProps<CheckboxFieldProps>(), {
  disabled: false,
  color: 'primary',
  label: undefined,
})

const model = defineModel<boolean>()

</script>
