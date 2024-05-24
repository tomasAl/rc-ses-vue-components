<template>
  <div class="field-wrapper">
    <label class="text-subtitle-1">Test</label>
    <label class="text-subtitle-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</label>
    <v-text-field
      variant="outlined"
      :disabled="disabled"
      placeholder="Placeholder text"
      prepend-inner-icon="mdi-magnify"
      :value="computedValue"
      @input="updateModelValue"
    >
      <template #clear>
        <XCircleFilledIcon />
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed, defineEmits } from "vue";
import XCircleFilledIcon from "../../../assets/icons/filled/XCircleFilledIcon.vue";

export type Props = {
  /** Color of the button */
  //color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";

  disabled?: boolean;

  modelValue?: string;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  modelValue: undefined,
});

const emit = defineEmits(['update:modelValue'])

const updateModelValue = function (e) {
  emit('update:modelValue', e)
}

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})


</script>

