<template>
  <div class="rc-number-stepper">
    <v-row no-gutters>
      <v-col class="rc-ns-col-input">
        <Textfield
          v-model="model"
          @input="handleInput"
          @blur="onBlur"
          :disabled="disabled"
          :readonly="readonly"
        />
      </v-col>
      <v-col class="rc-ns-col-actions">
        <v-btn
          class="minus bg-grey-100"
          @click="minusClick"
          :disabled="disabled"
          :readonly="readonly"
        >
          <v-icon icon="$minus"></v-icon>
        </v-btn>
        <v-btn
          class="plus bg-grey-100"
          @click="plusClick"
          :disabled="disabled"
          :readonly="readonly"
        >
          <v-icon icon="$plus"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import './NumberStepperStyle.scss'
import { withDefaults } from 'vue'
import { NumberStepperProps } from '@/types/inputs/NumberStepperProps'

const props = withDefaults(defineProps<NumberStepperProps>(), {
  max: Infinity,
  min: -Infinity,
  step: 1
})

const model = defineModel<number | string>()
model.value = props.min

const roundToStep = (value: number, step: number) => {
  const roundedValue = Math.round(value / step) * step

  // Avoid floating point precision issues
  return parseFloat(roundedValue.toFixed(10))
};

const handleInput = (event: InputEvent) => {
  const input = (event.target as HTMLInputElement).value
  const numericValue = parseFloat(input)
  if (!Number.isNaN(numericValue)) {
    model.value = numericValue
  } else {
    // Keep the input value as string if not a number
    model.value = input
  }
}

const getValueInRange = (value: number) => {
  return Math.max(Math.min(value, props.max), props.min)
}

const onBlur = () => {
  if (typeof model.value === 'number') {
    model.value = getValueInRange(model.value)
  } else {
    model.value = props.min
  }
}

const minusClick = () => {
  if (typeof model.value === 'number') {
    const newValue = model.value - props.step
    model.value = getValueInRange(roundToStep(newValue, props.step))
  }
}

const plusClick = () => {
  if (typeof model.value === 'number') {
    const newValue = model.value + props.step
    model.value = getValueInRange(roundToStep(newValue, props.step))
  }
}
</script>
