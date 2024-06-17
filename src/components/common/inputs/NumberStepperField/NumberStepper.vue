<template>
  <div class="rc-number-stepper">
    <v-container>
      <v-row no-gutters>
        <v-col class="rc-ns-col-input">
          <v-text-field class="rc-text-field" variant="outlined" hide-details></v-text-field>

        </v-col>
        <v-col class="rc-ns-col-actions">
          <v-btn>Test</v-btn>
          <v-btn>Test</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import './NumberStepperStyle.scss'
</script>
