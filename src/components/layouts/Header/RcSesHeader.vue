<template>
  <v-card class="rc-header-panel">
    <div v-if="dropShadow" class="rc-shadow"></div>
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" density="compact" class="pl-0 text-subtitle-2">
        <template v-if="$slots['breadcrumb-title']" #title="{ item }">
          <slot name="breadcrumb-title" v-bind="item"></slot>
        </template>
      </v-breadcrumbs>
      <h1 class="text-md-h1 text-h3 pt-2 pb-3">{{ title }}</h1>
      <div class="font-weight-light pb-2 text-md-body-1 text-subtitle-1">
        {{ description }}
      </div>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import type { HeaderPanelProps } from '@/components/layouts/Header/type'

import './style.scss'

withDefaults(defineProps<HeaderPanelProps>(), {})
</script>
