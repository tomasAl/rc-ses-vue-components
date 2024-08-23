<template>
  <v-expansion-panels v-model="model" flat>
    <v-expansion-panel :disabled="disabled ?? state?.disabled" :value="id">
      <v-expansion-panel-title static :collapse-icon="undefined" :expand-icon="undefined">
        <span class="text-h5">{{ title ?? state?.title }}</span>
        <span class="flex-grow-1" />
        <v-btn
          class="panel-icon"
          :icon="isExpanded ? '$collapse' : '$expand'"
          size="2.5rem"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import {
  AccordionControllerState,
  AccordionProps,
  AccordionState,
} from '@/components/common/Accordion/types/AccordionControllerState'

import './AccordionStyle.scss'

const props = defineProps<AccordionProps>()

const allStates = inject<AccordionControllerState>('state')
const toggleAccordion = inject('toggleAccordion')
const state: AccordionState | undefined =
  allStates && allStates.value ? allStates.value[props.id] : undefined

const expanded = computed(() => (props.expanded || state?.expanded ? [props.id] : []))
const isExpanded = computed(() => expanded.value.length)

console.log('expanded', expanded.value)

const model = computed<Array<string>>({
  get: () => expanded.value,
  set: () => toggleAccordion(props.id, !isExpanded.value),
})
</script>
