<template>
  <v-card class="rc-header-panel">
    <div v-if="dropShadow" class="rc-shadow"></div>
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" density="compact" class="pl-0 text-subtitle-2">
        <template v-if="$slots['breadcrumb-title']" #title="{ item }">
          <slot name="breadcrumb-title" v-bind="item"></slot>
        </template>
      </v-breadcrumbs>
      <h1 class="text-h1 pt-2 pb-3">{{ title }}</h1>
      <div class="font-weight-light pb-2">
        {{ description }}
      </div>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import type { HeaderPanelProps } from '@/types/layouts/HeaderPanelProps'

import './HeaderPanelStyle.scss'

defineProps<HeaderPanelProps>()
</script>
