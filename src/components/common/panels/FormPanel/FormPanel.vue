<template>
  <v-expansion-panels v-model="panelModel" flat>
    <v-expansion-panel :disabled="disabled" :value="id" >
      <v-expansion-panel-title static>
        <CheckBoldIcon v-if="completed" class="mr-3" size="18" color="secondary"/>
        <span class="text-h5">{{ title }}</span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import './FormPanelStyle.scss';
import { withDefaults, defineProps, defineEmits, computed } from "vue";
import CheckBoldIcon from "../../../../assets/icons/bold/CheckBoldIcon.vue";

type Props = {
  id: string;
  title: string;
  completed?: boolean;
  disabled?: boolean;
  expanded?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  completed: false,
  expanded: false,
});

const model = defineModel<Array<string>>();

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
