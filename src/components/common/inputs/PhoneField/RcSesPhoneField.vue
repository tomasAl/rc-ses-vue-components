<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :for="name"
  >
    <v-text-field
      ref="input"
      v-model="inputValue"
      v-maska="{
        mask: selectedCountry?.mask,
        preProcess: handleMultipleMasks,
      }"
      v-bind="$attrs"
      :placeholder="computedPlaceholder"
      class="rc-field rc-phone-input-field"
      :error="!!error"
      :hide-details="!(!!error || !!counter || !!messages)"
      :error-messages="error"
      :readonly="readonly"
      :disabled="disabled"
      :counter="counter"
      :name="name"
      :messages="messages"
      @input="handleModel"
      @update:focused="() => (searchValue = '')"
      @blur="activator = undefined"
    >
      <template #prepend-inner>
        <div class="flag-wrapper" type="button" @click="openMenu" @keydown="() => {}">
          <div
            class="flag-sprite-map mr-2"
            :class="`flag-sprite-map-${selectedCountry?.iso.toUpperCase()}`"
          />
          <v-icon icon="rc-caret-down-filled" size="14" />
          <div class="divider mx-2" />
          <span>{{ selectedCountry?.code }}</span>
        </div>
      </template>

      <v-menu
        :id="menuId"
        v-model="menu"
        :activator="activator"
        :close-on-content-click="false"
        :transition="'slide-y-transition'"
        offset="6"
        class="rc-card-menu rc-phone-field-menu rc-searchable-menu"
        @update="updateVList"
      >
        <v-card elevation="4">
          <RcSesSearchableArea v-model="searchValue" />
          <v-virtual-scroll
            :items="computedCountries"
            max-height="300"
            item-height="48"
            class="rc-menu-scroll rc-scrollable"
          >
            <template #default="{ item }">
              <v-list-item
                :key="item.iso"
                class="rc-menu-list-item"
                @click="selectItem(item)"
              >
                <template #prepend>
                  <div
                    class="flag-sprite-map mr-2"
                    :class="`flag-sprite-map-${item?.iso.toUpperCase()}`"
                  />
                </template>
                <template #title>
                  {{ item.name }} ({{ item.iso }})
                  <span class="flex-grow-1" />
                  {{ item.code }}
                </template>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-menu>
    </v-text-field>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import countries from 'countries-phone-masks'
import { Mask, MaskOptions } from 'maska'
import { vMaska } from 'maska/vue'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref, watch } from 'vue'

import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import type {
  PhoneInputCountry,
  PhoneInputFieldProps,
  PhoneInputModel,
} from '@/components/common/inputs/PhoneField/type'
import RcSesSearchableArea from '@/components/common/inputs/SearchableArea/RcSesSearchableArea.vue'

import './style.scss'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PhoneInputFieldProps>(), {
  defaultIso: undefined,
  fieldLabel: undefined,
  fieldDescription: undefined,
  fieldTooltip: undefined,
  veeField: undefined,
})

const getDefaultCountry = (): PhoneInputCountry | undefined => {
  const defaultCountry = countries.find(
    (country) => country.iso.toLowerCase() === props.defaultIso?.toLowerCase(),
  )
  return defaultCountry ?? countries[0] ?? undefined
}

const model = defineModel<PhoneInputModel | undefined>()
const activator = ref()
const searchValue = ref<string>()
const selectedCountry = ref<PhoneInputCountry | undefined>(getDefaultCountry())
const inputValue = ref<string>(model.value?.value ?? '')
const menu = ref(false)
const input = ref<Element | undefined>(undefined)
const menuId = uuidv4()

// Methods
const openMenu = () => {
  if (!props.readonly && !props.disabled) {
    activator.value = 'parent'
  }
}

const handleModel = () => {
  const phoneObject = {
    country: selectedCountry.value,
    value: inputValue.value,
  }

  model.value = phoneObject
  props.veeField?.setValue(phoneObject)
}

const getItemValueForSearch = (item: PhoneInputCountry): string => {
  return `${item.name} ${item?.iso} ${item?.code}`.toLowerCase()
}

const error = computed(() => {
  return props.error || props.veeField?.errorMessage
})

const computedCountries = computed(() => {
  if (!searchValue.value) {
    return countries
  }

  return countries.filter((item: PhoneInputCountry) =>
    searchValue.value ? getItemValueForSearch(item).includes(searchValue.value) : false,
  )
})

const updateVList = () => {
  // nextTick() - not always works, especially when searchValue becomes empty
  setTimeout(() => {
    const menuEl = document.getElementById(menuId)

    if (!menuEl) {
      return
    }

    const list = menuEl.querySelector('.rc-menu-scroll')

    if (!list) {
      return
    }

    if (list.scrollHeight > list.clientHeight) {
      list.classList.add('rc-scrollable')
    } else {
      list.classList.remove('rc-scrollable')
    }
  }, 200)
}

watch(computedCountries, () => {
  updateVList()
})

const selectItem = (country: PhoneInputCountry) => {
  selectedCountry.value = country
  menu.value = false
  handleModel()
}

const computedPlaceholder = computed(() => {
  return Array.isArray(selectedCountry?.value?.mask)
    ? selectedCountry.value.mask.join(', ')
    : selectedCountry?.value?.mask
})

const maskInstance = ref<Mask | null>(null)

const handleMultipleMasks = (value: string): string => {
  if (Array.isArray(selectedCountry?.value?.mask)) {
    if (!maskInstance.value) {
      const maskOptions: MaskOptions = { mask: selectedCountry.value.mask }
      maskInstance.value = new Mask(maskOptions)
    }
    return maskInstance.value.masked(value)
  }
  return value
}

watch(
  () => selectedCountry?.value?.mask,
  () => {
    // Reset the mask instance when the mask changes
    maskInstance.value = null
  },
  { deep: true },
)
</script>
