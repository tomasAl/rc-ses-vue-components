<template>
  <IconSVG v-bind="$props">
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="#06A0D4"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#06A0D4"/>
    <circle cx="12" cy="12" r="5" fill="white"/>
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
