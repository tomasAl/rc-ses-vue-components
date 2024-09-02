<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <v-text-field
      v-model="displayValue"
      v-bind="$attrs"
      class="rc-field rc-text-field"
      variant="outlined"
      :error="!!error"
      :hide-details="!(!!error || !!counter || !!messages)"
      :error-messages="error"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :counter="counter"
      :name="name"
      :messages="messages"
      :max-width="maxWidth"
      @input="updateModel"
    >
      <template v-if="$slots['append']" #append="binds">
        <slot name="append" v-bind="binds" />
      </template>
      <template v-if="$slots['append-inner']" #append-inner="binds">
        <slot name="append-inner" v-bind="binds" />
      </template>
      <template v-if="$slots['clear']" #clear="binds">
        <slot name="clear" v-bind="binds" />
      </template>
      <template v-if="$slots['counter']" #counter="binds">
        <slot name="counter" v-bind="binds" />
      </template>
      <template v-if="$slots['loader']" #loader="binds">
        <slot name="loader" v-bind="binds" />
      </template>
      <template v-if="$slots['prepend']" #prepend="binds">
        <slot name="prepend" v-bind="binds" />
      </template>
      <template v-if="$slots['prepend-inner']" #prepend-inner="binds">
        <slot name="prepend-inner" v-bind="binds" />
      </template>
    </v-text-field>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VTextField } from 'vuetify/components/VTextField'

import { FieldWrapper } from '@/components/common/inputs/FieldWrapper/FieldWrapper.vue'
import { TextFieldProps } from '@/types/inputs/TextFieldProps'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<TextFieldProps>(), {
  fieldLabel: '',
  fieldDescription: '',
  fieldTooltip: '',
  name: '',
  error: '',
  readonly: false,
  disabled: false,
  placeholder: '',
  counter: null,
  messages: '',
  maxWidth: null,
})

const model = defineModel<any>()
const displayValue = ref('')

watch(model, (newValue) => {
  // Update displayValue based on the model value
  displayValue.value = formatDisplayValue(newValue)
})

function updateModel(value: string) {
  // Update the model based on the display value
  model.value = parseDisplayValue(value)
}

function formatDisplayValue(value: any): string {
  // Custom logic to format the display value
  return `Formatted: ${value}`
}

function parseDisplayValue(value: string): any {
  // Custom logic to parse the display value back to the model value
  return value.replace('Formatted: ', '')
}
</script>
