<template>
  <v-dialog v-model="isOpen" max-width="400px">
    <v-card>
      <v-card-text class="text-center pa-6">
        <div
          class="rounded-circle my-5 pa-2 bg-success-50 w-25 h-25 d-inline-flex justify-center"
        >
          <CheckCircleFilledIcon color="secondary" class="ma-4" size="40" />
        </div>
        <h2 class="text-h4 font-weight-bold mb-2">Ar tikrai norite baigti darbą?</h2>
        <p class="text-body">
          Vidutinės rinkos vertės nekilnojamojo turto mokesčiams ir kitoms reikmėms
          nustatymas, perskaičiavimas (masinio vertinimo būdu), įrašymas ar pateikimas
        </p>
      </v-card-text>
      <v-card-actions class="justify-center pa-4 mb-4">
        <RcSesButton color="primary" variant="tonal" class="w-33" @click="confirm">
          Uždaryti
        </RcSesButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CheckCircleFilledIcon from '@/assets/icons/filled/CheckCircleFilledIcon.vue'
import RcSesButton from '@/components/common/buttons/Button/RcSesButton.vue'

// Adjust the import path as needed

const isOpen = ref(false)

const open = () => {
  isOpen.value = true
}

const confirm = () => {
  // Handle confirmation logic here
  isOpen.value = false
}

defineExpose({ open })
</script>
