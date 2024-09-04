<template>
  <div class="rc-vertical-stepper-wrapper">
    <div class="rc-vertical-stepper">
      <div class="line" />
      <div
        v-for="(step, index) in items"
        :key="index"
        class="step"
        :class="{ active: step.state === 'active' }"
      >
        <div class="step-icon">
          <v-icon
            v-if="step.state === 'completed'"
            icon="rc-success"
            color="success-500"
          />
          <DotActive v-else-if="step.state === 'active'" color="primary" />
          <DotInactive v-else />
        </div>
        <div
          class="step-title"
          :class="{
            'text-h6': step.state === 'active',
            'text-subtitle-1': step.state !== 'active',
          }"
        >
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DotActive from '@/assets/icons/filled/DotActive.vue'
import DotInactive from '@/assets/icons/filled/DotInactive.vue'
import { VerticalStepperProps } from '@/components/common/steppers/VerticalStepper/VerticalStepperProps'

import './VerticalStepperStyle.scss'

defineProps<VerticalStepperProps>()
</script>
