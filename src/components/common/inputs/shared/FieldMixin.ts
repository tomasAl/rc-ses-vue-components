import { computed, ref } from 'vue'

export default function useTextFieldMixin(
  props: { modelValue?: string; value?: string },
  emit: (event: 'update:modelValue', value: string) => void,
) {
  const inputValue = computed(() => props.modelValue ?? props.value ?? '')

  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    const newValue = target.value
    emit('update:modelValue', newValue)
  }

  const modelRef = ref(inputValue.value)

  return {
    inputValue,
    updateValue,
    modelRef,
  }
}
