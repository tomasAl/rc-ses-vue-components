<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <NumberStepper />
  </FieldWrapper>
</template>


<script setup lang="ts">
import './CheckboxFieldStyle.scss'
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<CheckboxFieldProps>(), {
  disabled: false,
  color: 'primary',
  label: undefined,
})

const model = defineModel<boolean>()

</script>
