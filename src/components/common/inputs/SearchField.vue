<template>
  <div class="field-wrapper">
    <label class="text-subtitle-1">Test</label>
    <label class="text-subtitle-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</label>
    <v-text-field
      variant="outlined"
      :disabled="disabled"
      placeholder="Placeholder text"
      prepend-inner-icon="mdi-magnify"
      v-model="model"
      error
      error-messages="abla"
    >
      <template #clear>
        <XCircleFilledIcon @click="model = ''"/>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from "vue";
import XCircleFilledIcon from "../../../assets/icons/filled/XCircleFilledIcon.vue";

export type Props = {
  /** Color of the button */
  //color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";

  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  modelValue: undefined,
});

const model = defineModel()

</script>

