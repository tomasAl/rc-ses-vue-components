<template>
  <IconSVG v-bind="$props">
    <rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
    <rect x="1" y="1" width="18" height="18" rx="9" stroke="#DFE2E5" stroke-width="2" />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'RadioOffIcon',
  components: { IconSVG },
  props: useIconProps,
})
</script>
