<template>
  <v-container class="rc-container rc-container-center d-flex">
    <div
      v-if="showProgressStepper"
      class="rc-form-stepper d-none d-md-flex"
      style="flex-grow: 1"
    >
      <RcSesFormStepper
        v-if="showProgressStepper"
        :items="state"
        style="margin-top: 2.875rem"
      ></RcSesFormStepper>
    </div>
    <div class="rc-container-content">
      <div class="rc-form-wrapper">
        <div v-if="computedAccordionControlsVisible" class="rc-form-actions">
          <v-btn variant="text" class="text-body-2 text-primary-600" @click="expandAll">
            <template #prepend>
              <OpenIcon size="16" />
            </template>
            Praskleisti visus
          </v-btn>
          <v-btn variant="text" class="text-body-2 text-primary-600" @click="collapseAll">
            <template #prepend>
              <CloseIcon size="16" />
            </template>
            Suskleisti visus
          </v-btn>
        </div>

        <!-- Default CONTENT goes here         -->
        <slot />
      </div>

      <slot name="actions-wrapper" v-bind="{ formController, accordionController }">
        <RcSesFormActions v-if="$slots.actions">
          <slot name="actions" v-bind="{ formController, accordionController }"></slot>
        </RcSesFormActions>
      </slot>

      <slot v-if="$slots['actions-after']" name="actions-after" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

import CloseIcon from '@/assets/icons/regular/CloseIcon.vue'
import OpenIcon from '@/assets/icons/regular/OpenIcon.vue'
import RcSesFormActions from '@/components/layouts/FormActions/RcSesFormActions.vue'
import RcSesFormStepper from '@/components/layouts/FormStepper/RcSesFormStepper.vue'
import UseFormType from '@/types/forms/UseFormType'

import './style.scss'
import { FormContainerProps } from './type'

const props = defineProps<FormContainerProps>()

const { collapseAll, expandAll, state, toggleAccordion } = props.accordionController

provide('states', state)
provide('collapseAll', collapseAll)
provide('expandAll', expandAll)
provide('toggleAccordion', toggleAccordion)

provide<UseFormType>('formController', props.formController)

const computedAccordionControlsVisible = computed(() => {
  if (Object.keys(state).length <= 1 || !props.showAccordionCollapseControls) return false
  return true
})
</script>
