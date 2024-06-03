<template>
  <IconSVG v-bind="$props">
    <circle cx="12" cy="12" r="3" fill="#D0D4D9"/>
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useIconProps from "../useIconProps";
import IconSVG from "../IconSVG.vue";

export default defineComponent({
  name: "DotInactive",
  components: {IconSVG},
  props: useIconProps,
});
</script>
