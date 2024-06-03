<template>
  <IconSVG v-bind="$props">
    <circle cx="12" cy="12" r="6" fill="#222D3D"/>
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useIconProps from "../useIconProps";
import IconSVG from "../IconSVG.vue";

export default defineComponent({
  name: "DotActive",
  components: {IconSVG},
  props: useIconProps,
});
</script>
