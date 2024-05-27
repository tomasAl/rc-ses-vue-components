<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-title>
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
  import {withDefaults} from "vue";

  type Props = {
    title: string;
    completed?: boolean;
    disabled?: boolean;
  };

  withDefaults(defineProps<Props>(), {
    disabled: false,
    completed: false,
  });
</script>
