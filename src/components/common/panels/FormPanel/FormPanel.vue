<template>
  <v-expansion-panels v-model="panelModel" flat>
    <v-expansion-panel :disabled="disabled" :value="id">
      <v-expansion-panel-title static class="no-hover" :collapse-icon="null" :expand-icon="null">
        <CheckBoldIcon v-if="completed" class="mr-3" size="18" color="secondary"/>
        <span class="text-h5">{{ title }}</span>
        <span class="flex-grow-1" />
        <span v-if="isButtonHover" class="text-subtitle-1 mr-3 text-grey-600 text-decoration-underline">{{ buttonHelperText }}</span>
        <v-btn :icon="isExpanded ? '$collapse' : '$expand'" @mouseover="isButtonHover = true" @mouseout="isButtonHover = false"/>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import './FormPanelStyle.scss';
import { withDefaults, defineProps, computed, ref } from "vue";
import CheckBoldIcon from "../../../../assets/icons/bold/CheckBoldIcon.vue";

type Props = {
  id: string;
  title: string;
  completed?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  completed: false,
});
const isButtonHover = ref<boolean>(false);
const model = defineModel<Array<string>>();

const isExpanded = computed(() => panelModel.value.includes(props.id))
const buttonHelperText = computed(() => isExpanded.value ? 'Suskleisti' : 'Išskleisti')

const panelModel = computed<Array<string>>({
  get: () => model.value,
  set: (value?: Array<string>) => {
    const includes = model.value.includes(props.id)

    if (!value && includes) {
      model.value = model.value.filter((ep) => ep !== props.id);
    }

    if (value && !includes) {
      model.value.push(props.id)
      }
  }
})

</script>
