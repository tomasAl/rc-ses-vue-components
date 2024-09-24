<template>
  <v-container class="rc-container rc-container-center">
    <div class="rc-container-content">
      <v-card class="rcs-ft-container">
        <v-card-text class="rcs-ft-header">
          <v-card-title class="text-h5">{{ title }}</v-card-title>
          <slot />
        </v-card-text>
      </v-card>

      <RcSesFormActions v-if="$slots.actions" class="mt-4">
        <slot name="actions"></slot>
      </RcSesFormActions>

      <slot v-if="$slots['actions-after']" name="actions-after" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { provide } from 'vue'

import RcSesFormActions from '@/components/layouts/FormActions/RcSesFormActions.vue'
import UseFormType from '@/types/forms/UseFormType'

import './style.scss'

interface Props {
  formController?: UseFormType
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  formController: undefined,
})

provide<UseFormType>('formController', props.formController)
</script>
