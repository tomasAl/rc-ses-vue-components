<template>
  <v-container>
    <v-row>
      <v-col md="4" lg="3" xl="2" class="d-none d-md-flex">
        <VerticalStepper :items="verticalStepperItems" style="margin-top: 2.875rem"></VerticalStepper>
      </v-col>
      <v-col sm="12" md="8" lg="9" xl="10">
        <template v-for="(item, index) in items">
          <FormWrapper
            :key="index"
            v-if="item?.active"
            :panels="item.panels"
          />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import { VerticalStepperItemProps } from "../../types/steppers/VerticalStepperProps";
import { StepFormLayoutProps } from "../../types/layouts/StepFormLayoutProps";

const props = defineProps<StepFormLayoutProps>();
const verticalStepperItems: Array<VerticalStepperItemProps> = props.items
</script>
