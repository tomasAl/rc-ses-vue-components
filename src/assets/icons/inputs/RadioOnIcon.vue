<template>
  <IconSVG v-bind="$props">
    <rect x="1" y="1" width="20" height="20" rx="10" fill="#00A879" />
    <rect x="1" y="1" width="20" height="20" rx="10" stroke="#00A879" stroke-width="2" />
    <circle cx="11" cy="11" r="5" fill="white" />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'RadioOnIcon',
  components: { IconSVG },
  props: useIconProps,
})
</script>
