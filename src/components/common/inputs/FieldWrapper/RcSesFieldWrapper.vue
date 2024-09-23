<template>
  <div class="rc-field-wrapper">
    <div v-if="label || description" class="rc-field-labels">
      <div class="rc-field-label-title">
        <label
          v-if="label"
          :for="props.for"
          class="text-subtitle-1 text-md-body-2 font-weight-medium"
        >
          {{ label }}
        </label>

        <RcSesTooltip
          v-if="tooltip"
          :title="tooltipTitle"
          :description="tooltip"
          location="top"
          max-width="270"
        >
          <template #activator="activator">
            <v-icon
              v-bind="activator.props"
              icon="$tooltip"
              size="small"
              class="rc-tooltip-label-icon ml-2"
            />
          </template>
        </RcSesTooltip>
      </div>
      <label
        v-if="description"
        :for="props.for"
        class="text-subtitle-2 rc-field-description"
      >
        {{ description }}
      </label>
    </div>
    <div
      class="rc-field-content"
      :class="{ 'rc-field-content--variant-outlined': variant === 'outlined' }"
    >
      <slot />
      <RcSesTooltip
        v-if="tooltip"
        :title="tooltipTitle"
        :description="tooltip"
        max-width="270"
      >
        <template #activator="activator">
          <v-icon
            v-bind="activator.props"
            icon="$tooltip"
            size="small"
            class="rc-tooltip-input-icon ml-2"
          />
        </template>
      </RcSesTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import RcSesTooltip from '@/components/common/tooltip/RcSesTooltip.vue'

import './style.scss'

type Props = {
  label?: string
  description?: string
  for?: string
  variant?: 'text' | 'outlined'
  tooltip?: string
  tooltipTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  for: undefined,
  variant: 'text',
  tooltip: undefined,
  tooltipTitle: undefined,
})
</script>
