<template>
  <v-expansion-panels v-model="model" flat>
    <v-expansion-panel :disabled="disabled ?? state?.disabled" :value="id">
      <v-expansion-panel-title static :collapse-icon="undefined" :expand-icon="undefined">
        <v-icon
          v-if="state?.state === 'completed'"
          class="mr-2"
          icon="$complete"
          color="secondary"
          size="18"
        ></v-icon>
        <v-icon
          v-if="state?.state === 'error'"
          class="mr-2"
          icon="$error"
          color="error"
          size="18"
        ></v-icon>
        <span class="text-h5">{{ title ?? state?.title }}</span>
        <span class="flex-grow-1" />
        <v-btn
          v-if="panelCount > 1"
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
import { computed, inject } from 'vue'

import {
  AccordionControllerState,
  AccordionProps,
  AccordionState,
} from '@/components/common/Accordion/types/AccordionControllerState'

import './style.scss'

const props = defineProps<AccordionProps>()

const allStates = inject<AccordionControllerState>('states')
const toggleAccordion = inject('toggleAccordion') as (
  id: string,
  expanded: boolean,
) => void
const state: AccordionState | undefined =
  allStates && allStates.value ? allStates.value[props.id] : undefined

const panelCount = computed(() => {
  return Object.keys(allStates?.value ?? {}).length
})

const expanded = computed(() =>
  panelCount.value === 1 || props.expanded || state?.expanded ? [props.id] : [],
)
const isExpanded = computed(() => expanded.value.length)

const model = computed<Array<string>>({
  get: () => expanded.value,
  set: () => toggleAccordion(props.id, !isExpanded.value),
})
</script>
