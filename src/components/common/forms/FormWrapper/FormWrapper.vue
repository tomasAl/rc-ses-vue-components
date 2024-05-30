<template>
  <div class="rc-form-wrapper">
    <div class="rc-form-actions">
      <v-btn
        variant="text"
        class="text-body-3"
        color="primary"
        @click="expandAll"
      >
        <template #prepend>
          <OpenIcon size="16" />
        </template>
        Praskleisti visus
      </v-btn>
      <v-btn
        variant="text"
        class="text-body-3"
        color="primary"
        @click="collapseAll"
      >
        <template #prepend>
          <CloseIcon size="16" />
        </template>
        Suskleisti visus
      </v-btn>
    </div>

    <FormPanel
      v-for="(panel) in panels"
      :key="panel.id"
      :id="panel.id"
      :title="panel.title"
      :disabled="panel.disabled"
      :completed="panel.completed"
      v-model="expandedPanels"
    >
      <slot :name="'panel-' + panel.id" v-bind="panel">
        <component :is="panel.component"></component>
      </slot>
    </FormPanel>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import './FormWrapperStyle.scss';
import OpenIcon from "../../../../assets/icons/regular/OpenIcon.vue";
import CloseIcon from "../../../../assets/icons/regular/CloseIcon.vue";

type Panel = {
  id: string;
  title: string;
  disabled?: boolean;
  completed?: boolean;
  expanded?: boolean;
  component?: any;
};

const props = defineProps<{
  panels: Panel[];
}>();

const expandedPanels = ref<Array<string>>([])

props.panels.forEach(panel => {
  if (panel.expanded) {
    expandedPanels.value.push(panel.id);
  }
})

const expandAll = () => {
  props.panels.forEach(panel => {
    expandedPanels.value.push(panel.id);
  });
};


const collapseAll = () => {
  props.panels.forEach(() => {
    expandedPanels.value = [];
  });
};
</script>
