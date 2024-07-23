<template>
  <div class="icon-flag">
    <img v-if="flagUrl" :src="flagUrl" :alt="`Flag of ${iso}`" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'IconFlag',
  props: {
    iso: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const flagUrl = ref<string | null>(null)

    const loadFlag = async (iso: string | undefined) => {
      try {
        const module = await import(`./flags/${iso?.toLowerCase()}.svg`)
        flagUrl.value = module.default
      } catch (error) {
        // console.error('Error loading the flag:', error)
        flagUrl.value = null // Optionally, set to a default image path here
      }
    }

    watch(
      () => props.iso,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          loadFlag(newValue)
        }
      },
      { immediate: true },
    )

    // Ensure the flag is attempted to load on mount as well
    onMounted(() => {
      loadFlag(props.iso)
    })

    return {
      flagUrl,
    }
  },
})
</script>
