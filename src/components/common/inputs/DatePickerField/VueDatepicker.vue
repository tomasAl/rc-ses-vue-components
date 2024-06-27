<template>
  <DatePicker
    ref="datepickerRef"
    v-model="date"
    :enable-time-picker="false"
    :week-start="1"
    :month-change-on-scroll="true"
    locale="lt"
    month-name-format="long"
    :range="isRange"
    :multi-calendars="isRange ? 2 : 1"
    format="yyyy-MM-dd"
    :placeholder="isRange ? 'Select date range' : 'Select date'"
    :auto-apply="false"
    :close-on-auto-apply="false"
    :teleport="true"
    :min-range="1"
    :hide-input-icon="false"
    menu-class-name="custom-datepicker-menu"
    input-class-name="custom-datepicker-input"
    class="custom-datepicker"

  >
    <template #arrow-left>
      <v-icon icon="$prev"></v-icon>
    </template>

    <template #arrow-right>
      <v-icon icon="$next" />
    </template>

    <template #action-preview>
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getThisWeek">Ši savaitė</v-btn>
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getThisMonth">Šis mėnuo</v-btn>
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getLastMonth">Praėjęs mėnuo</v-btn>
    </template>

    <template #calendar-icon>
      <v-icon icon="$calendar" />
    </template>

    <template #action-buttons>
      <v-btn
        variant="text"
        color="primary"
        class="text-subtitle-1"
        @click="closeDatepicker"
      >
        Uždaryti
      </v-btn>
      <v-btn @click="handleBlur" color="primary">Gerai</v-btn>
    </template>
  </DatePicker>
</template>

<script setup>
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, ref } from 'vue'

import './VueDatepickerStyle.scss'

const props = defineProps({
  isRange: {
    type: Boolean,
    default: false,
  },
})

const datepickerRef = ref(null)
const date = ref(null)

const handleInternal = (selectedDate) => {
  // Do something
  date.value = selectedDate
}

const handleBlur = () => {
  if (datepickerRef) {
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
  date.value = [firstDay, lastDay]
}

const getThisMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  date.value = [firstDay, lastDay]
}

const getLastMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0)
  date.value = [firstDay, lastDay]
}
</script>
