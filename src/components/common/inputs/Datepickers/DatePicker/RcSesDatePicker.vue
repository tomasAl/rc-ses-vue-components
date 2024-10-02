<template>
  <DatePicker
    ref="datepickerRef"
    v-model="modelValue"
    v-bind="props"
    :enable-time-picker="false"
    :week-start="1"
    :month-change-on-scroll="true"
    locale="lt"
    month-name-format="long"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :range="range"
    :multi-calendars="range ? 2 : 0"
    :format="formatPreview"
    :auto-apply="false"
    :close-on-auto-apply="false"
    :teleport="false"
    :min-range="1"
    :hide-input-icon="false"
    menu-class-name="rc-datepicker-menu"
    input-class-name="rc-datepicker-input"
    class="rc-datepicker"
    :class="{ 'rc-datepicker--range': range }"
    @update:model-value="handleChange"
  >
    <template #dp-input="inputBind">
      <RcSesTextField
        v-bind="inputBind"
        prepend-inner-icon="$calendar"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        :readonly="readonly"
        :error="error"
        :value="displayValue"
      />
    </template>

    <template
      #month-year="{ month, year, months, updateMonthYear, handleMonthYearChange }"
    >
      <v-icon
        class="rc-datepicker-prev-icon"
        icon="rc-caret-double-left-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange && handleMonthYearChange(false, true)"
      />
      <v-icon
        class="rc-datepicker-prev-icon"
        icon="rc-caret-left-bold"
        size="16"
        color="grey"
        @click="
          updateMonthYear && month !== undefined && updateMonthYear(month - 1, year, true)
        "
      />
      <div class="text-body-1 flex-grow-1 text-center font-weight-strong">
        {{
          months && month !== undefined ? months.find((m) => m.value === month)?.text : ''
        }}
        {{ year }}
      </div>
      <v-icon
        class="rc-datepicker-next-icon"
        icon="rc-caret-right-bold"
        size="16"
        color="grey"
        @click="
          updateMonthYear && month !== undefined && updateMonthYear(month + 1, year, true)
        "
      />
      <v-icon
        class="rc-datepicker-next-icon"
        icon="rc-caret-double-right-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange && handleMonthYearChange(true, true)"
      />
    </template>

    <template #clear-icon="{ clear }">
      <XCircleFilledIcon color="grey-900" @click="clear" />
    </template>

    <template #arrow-left>
      <v-icon icon="$prev"></v-icon>
    </template>

    <template #arrow-right>
      <v-icon icon="$next" />
    </template>

    <template v-if="range" #action-preview>
      <v-btn variant="text" color="primary" class="text-body-2" @click="getThisWeek"
        >Ši savaitė</v-btn
      >
      <v-btn variant="text" color="primary" class="text-body-2" @click="getThisMonth"
        >Šis mėnuo</v-btn
      >
      <v-btn variant="text" color="primary" class="text-body-2" @click="getLastMonth"
        >Praėjęs mėnuo</v-btn
      >
    </template>

    <template #calendar-icon>
      <v-icon icon="$calendar" />
    </template>

    <template #action-buttons>
      <v-btn variant="text" color="primary" @click="closeDatepicker"> Uždaryti </v-btn>
      <v-btn color="primary" @click="selectDate">Gerai</v-btn>
    </template>
  </DatePicker>
</template>

<script setup lang="ts">
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watch } from 'vue'

import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import { DatePickerProps } from '@/components/common/inputs/Datepickers/DatePicker/types'
import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

import './style.scss'

const props = defineProps<DatePickerProps>()

const datepickerRef = ref<any>(null)
const modelValue = defineModel<any>()
const displayValue = ref('')

const formatSingleDate = (dt: Date): string => {
  return dt.toISOString().split('T')[0] ?? '' // YYYY-MM-DD
}

const formatDateRange = (startDate: Date, endDate: Date): any => {
  const start = formatSingleDate(startDate)
  const end = formatSingleDate(endDate)
  return `${start}  →  ${end}`
}

const formatPreview = (
  dt: string | Date | Date[] | ((date: Date) => string) | ((dates: Date[]) => string),
): string => {
  if (Array.isArray(dt) && dt.length === 2) {
    // Date range
    const [start, end] = dt
    if (start instanceof Date && end instanceof Date) {
      return formatDateRange(start, end)
    }
    return 'Invalid date range'
  }
  if (dt instanceof Date) {
    // Single date
    return formatSingleDate(dt)
  }
  if (typeof dt === 'function') {
    // Handle function cases if needed
    return 'Function provided'
  }
  if (typeof dt === 'string') {
    // Handle string case
    return dt
  }
  return 'Invalid date format'
}

const handleChange = (value: any) => {
  modelValue.value = value
  displayValue.value = ''
}

const selectDate = () => {
  if (datepickerRef.value) {
    datepickerRef.value.selectDate()
  }
}

const closeDatepicker = () => {
  if (datepickerRef.value) {
    datepickerRef.value.closeMenu()
  }
}

const getThisWeek = () => {
  const today = new Date()
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7))
  if (modelValue.value) {
    modelValue.value = [firstDay, lastDay]
    displayValue.value = formatPreview([firstDay, lastDay])
  }
}

const getThisMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  if (modelValue.value) {
    modelValue.value = [firstDay, lastDay]
    displayValue.value = formatPreview([firstDay, lastDay])
  }
}

const getLastMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0)
  if (modelValue.value) {
    modelValue.value = [firstDay, lastDay]
    displayValue.value = formatPreview([firstDay, lastDay])
  }
}

watch(modelValue, (newValue) => {
  displayValue.value = formatPreview(newValue)
})
</script>
