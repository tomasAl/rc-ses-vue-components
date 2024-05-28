<template>
  <svg
    :width="computedSize"
    :height="computedSize"
    viewBox="0 0 24 24"
    fill="currentcolor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot></slot>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useIconProps from "./useIconProps";

export default defineComponent({
  name: 'IconSVG',
  props: useIconProps,
  setup(props) {
    const computedSize = computed(() => {
      return isNaN(Number(props.size)) ? props.size : `${props.size}px`
    });

    return {
      computedSize
    };
  },
});
</script>
