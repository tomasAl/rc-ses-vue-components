<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="label"
    :description="description"
    :for="name"
  >
    <div class="rc-radios">
      <v-btn
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'v-btn--active': selectedOption === option.value }"
        :value="option.value"
        variant="outlined"
        @click="model = option.value"
      >
        {{ option.label }}
      </v-btn>
    </div>
  </FieldWrapper>
</template>

<script setup lang="ts">
import './RadioButtonsFieldStyle.scss'
import { RadioButtonsFieldProps } from '@/types/inputs/RadioFieldProps'

withDefaults(defineProps<RadioButtonsFieldProps>(), {
  label: undefined,
  options: () => [],
})

const model = defineModel<string>()

const selectedOption = computed(() => {
  return model.value ? model.value : null
})

</script>

