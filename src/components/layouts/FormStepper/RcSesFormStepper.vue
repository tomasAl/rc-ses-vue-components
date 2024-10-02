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
          <v-icon v-else-if="step.state === 'error'" icon="$error" color="error" />
          <DotActive v-else-if="step.state === 'active'" color="primary" />
          <DotInactive v-else />
        </div>
        <div
          class="step-title"
          :class="{
            'text-h6': step.state === 'active',
            'text-body-2': step.state !== 'active',
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
import { FormStepperProps } from '@/components/layouts/FormStepper/type'

import './style.scss'

defineProps<FormStepperProps>()
</script>
