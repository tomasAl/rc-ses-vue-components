<template>
  <div class="rc-vertical-stepper-wrapper">
    <div class="rc-vertical-stepper">
      <div class="line" />
      <div
        v-for="(step, index) in items"
        :key="index"
        class="step"
        :class="{ active: step.active }"
      >
        <div class="step-icon">
          <CheckSuccessIcon v-if="step.completed" />
          <DotActive v-else-if="step.active" />
          <DotInactive v-else />
        </div>
        <div
          class="step-title"
          :class="{ 'text-h6': step.active, 'text-body-3': !step.active }"
        >
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './VerticalStepperStyle.scss';
import CheckSuccessIcon from "../../../../assets/icons/regular/CheckSuccessIcon.vue";
import DotActive from "../../../../assets/icons/filled/DotActive.vue";
import DotInactive from "../../../../assets/icons/filled/DotInactive.vue";
import {withDefaults} from "vue";
import {VerticalStepperProps} from "@/types/steppers/VerticalStepperProps";


const props = defineProps<VerticalStepperProps>();

</script>
