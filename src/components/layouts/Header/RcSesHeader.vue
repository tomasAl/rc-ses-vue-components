<template>
  <v-card class="rc-header-panel">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" density="compact" class="text-subtitle-2">
        <template v-if="$slots['breadcrumb-title']" #title="{ item }">
          <slot name="breadcrumb-title" v-bind="item"></slot>
        </template>
      </v-breadcrumbs>
      <h1 class="text-md-h1 text-h4">{{ title }}</h1>
      <div class="font-weight-light text-md-body-1 text-body-1">
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
