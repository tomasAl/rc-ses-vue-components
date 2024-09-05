<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col md="4" lg="3" xl="2" class="d-none d-md-flex">
        <VerticalStepper
          v-if="Object.keys(state).length > 1"
          :items="state"
          style="margin-top: 2.875rem"
        ></VerticalStepper>
      </v-col>
      <v-col sm="12" md="8" lg="9" xl="10">
        <div class="rc-form-wrapper">
          <div class="rc-form-actions">
            <v-btn
              variant="text"
              class="text-subtitle-1 text-primary-600"
              @click="expandAll"
            >
              <template #prepend>
                <OpenIcon size="16" />
              </template>
              Praskleisti visus
            </v-btn>
            <v-btn
              variant="text"
              class="text-subtitle-1 text-primary-600"
              @click="collapseAll"
            >
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
          <FormActionPanel v-if="$slots.actions">
            <slot name="actions" v-bind="{ formController, accordionController }"></slot>
          </FormActionPanel>
        </slot>

        <slot v-if="$slots['actions-after']" name="actions-after" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/regular/CloseIcon.vue'
import OpenIcon from '@/assets/icons/regular/OpenIcon.vue'
import UseFormType from '@/types/forms/UseFormType'

import './ServiceFormContainerStyle.scss'
import { ServiceFormContainerProps } from './ServiceFormContainerType'

const props = defineProps<ServiceFormContainerProps>()

const { collapseAll, expandAll, state, toggleAccordion } = props.accordionController

provide('states', state)
provide('collapseAll', collapseAll)
provide('expandAll', expandAll)
provide('toggleAccordion', toggleAccordion)

provide<UseFormType>('formController', props.formController)
</script>
