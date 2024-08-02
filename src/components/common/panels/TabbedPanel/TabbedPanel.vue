<template>
  <v-container>
    <v-card class="rc-tabbed-panel">
      <v-card-text class="rc-tabbed-panel-header">
        <v-card-title class="text-h5">{{ title }}</v-card-title>
        <v-tabs v-model="tab" class="rc-tabs">
          <Tab
            v-for="item in items"
            :key="item.value"
            variant="outlined"
            @click="tab = item.value"
          >
            {{ item.title }}
          </Tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item.value" class="rc-tab-window">
            <component :is="item.component"></component>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>

    <FormActionPanel v-if="$slots.actions" class="mt-4">
      <slot name="actions"></slot>
    </FormActionPanel>

    <slot v-if="$slots['actions-after']" name="actions-after" />

  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import './TabbedPanelStyle.scss'

type TabbedPanelItem = {
  title: string
  value: number
  active?: boolean
  component?: any
}

interface Props {
  title: string
  items: Array<TabbedPanelItem>
}

const props = withDefaults(defineProps<Props>(), {})

const activeTab = props.items.filter((x) => x.active)

const tab = ref<string | number>(activeTab[0]?.value ?? 0)
</script>
