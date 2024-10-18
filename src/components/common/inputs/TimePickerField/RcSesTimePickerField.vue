<template>
  <RcSesTextField
    ref="timeInput"
    v-bind="props"
    v-model="displayTime"
    @click="handleClick"
    @keydown="handleKeydown"
    @input="handleInput"
    @blur="adjustTime"
    @paste="handlePaste"
  >
    <template #prepend-inner>
      <v-icon @click.stop="openMenu">$calendar</v-icon>
    </template>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="bottom"
      :activator="activator"
      max-height="300"
    >
      <v-card elevation="1">
        <div class="d-flex">
          <div class="flex-column flex-grow-1">
            <v-list class="overflow-y-auto" style="max-height: 200px">
              <v-list-item
                v-for="hour in computedHours"
                :key="hour"
                @click="selectHour(hour)"
              >
                {{ hour }}
              </v-list-item>
            </v-list>
          </div>
          <div class="flex-column flex-grow-1">
            <v-list class="overflow-y-auto" style="max-height: 200px">
              <v-list-item
                v-for="minute in computedMinutes"
                :key="minute"
                @click="selectMinute(minute)"
              >
                {{ minute }}
              </v-list-item>
            </v-list>
          </div>
          <div class="flex-column flex-grow-1">
            <v-list>
              <v-list-item
                v-for="period in periods"
                :key="period"
                @click="selectPeriod(period)"
              >
                {{ period }}
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-card>
    </v-menu>

    <template v-if="$slots['append']" #append="binds">
      <slot name="append" v-bind="binds" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner="binds">
      <slot name="append-inner" v-bind="binds" />
    </template>
    <template v-if="$slots['counter']" #counter="binds">
      <slot name="counter" v-bind="binds" />
    </template>
    <template v-if="$slots['loader']" #loader="binds">
      <slot name="loader" v-bind="binds" />
    </template>
    <template v-if="$slots['prepend']" #prepend="binds">
      <slot name="prepend" v-bind="binds" />
    </template>
  </RcSesTextField>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

import type { TimepickerFieldProps } from './type'

const props = defineProps<TimepickerFieldProps>()
const model = defineModel<string>()

const activator = ref<string | undefined>(undefined)
const menu = ref(false)
const timeInput = ref<any | null>(null)
const editingHours = ref(false)
const editingMinutes = ref(false)

const selectedHour = ref('12')
const selectedMinute = ref('00')
const selectedPeriod = ref('AM')

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))
const periods = ['AM', 'PM', '24H']

const computedHours = computed(() => {
  if (selectedPeriod.value === '24H') {
    return Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
  }
  return hours
})

const computedMinutes = computed(() => {
  return minutes
})

const modelTime = computed({
  get: () => model.value || '',
  set: (value: string) => {
    model.value = value
  },
})

const updateModelValue = () => {
  let hh = selectedHour.value

  if (selectedPeriod.value !== '24H') {
    const hourNum = parseInt(selectedHour.value, 10)
    if (selectedPeriod.value === 'PM' && hourNum !== 12) {
      hh = String((hourNum + 12) % 24).padStart(2, '0')
    } else if (selectedPeriod.value === 'AM' && hourNum === 12) {
      hh = '00'
    }
  }

  modelTime.value = `${hh}:${selectedMinute.value}`
}

const displayTime = computed({
  get: () => `${selectedHour.value}:${selectedMinute.value} ${selectedPeriod.value}`,
  set: (value: string) => {
    if (!value) {
      // Handle empty or undefined value
      selectedHour.value = '12'
      selectedMinute.value = '00'
      selectedPeriod.value = 'AM'
      return
    }

    const [time, period] = value.split(' ')
    const [lhours, lminutes] = time?.split(':') || ['00', '00']

    selectedHour.value = lhours || selectedHour.value
    selectedMinute.value = lminutes || selectedMinute.value
    selectedPeriod.value = period || selectedPeriod.value

    // Update the model value after setting the display time
    updateModelValue()
  },
})

const ensureTwoDigits = (value: string): string => {
  return value.length === 1 ? `0${value}` : value
}

const adjustTime = () => {
  activator.value = undefined
  selectedHour.value = ensureTwoDigits(selectedHour.value)
  selectedMinute.value = ensureTwoDigits(selectedMinute.value)
}

const switchEditingMode = (toMinutes: boolean) => {
  adjustTime()
  editingHours.value = !toMinutes
  editingMinutes.value = toMinutes

  const input = timeInput.value.$el.querySelector('input')
  if (input) {
    setTimeout(() => {
      const startPos = toMinutes ? 3 : 0
      const endPos = toMinutes ? 5 : 2
      input.setSelectionRange(startPos, endPos)
      input.focus()
    }, 0)
  }
}

const openMenu = () => {
  activator.value = 'parent'
  menu.value = true
}

const handleClick = (event: MouseEvent) => {
  if (!timeInput.value) return

  const input = timeInput.value.$el.querySelector('input')
  if (!input) return

  const clickPosition = event.clientX - input.getBoundingClientRect().left

  if (clickPosition > 19 && clickPosition < 40) {
    switchEditingMode(true)
  } else {
    switchEditingMode(false)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault()
    switchEditingMode(!editingHours.value)
  } else if (event.key === 'Backspace') {
    event.preventDefault()
  } else if (event.key === 'Delete') {
    event.preventDefault()
  }
}

const isValidHour = (hour: string): boolean => {
  if (!/^\d+$/.test(hour)) return false
  const hourNum = parseInt(hour, 10)
  return selectedPeriod.value === '24H'
    ? hourNum >= 0 && hourNum <= 23
    : hourNum >= 1 && hourNum <= 12
}

const isValidMinute = (minute: string): boolean => {
  if (!/^\d+$/.test(minute)) return false
  const minuteNum = parseInt(minute, 10)
  return minuteNum >= 0 && minuteNum <= 59
}

const handleInput = () => {
  const [time, period] = displayTime.value.split(' ')
  const [lhours, lminutes] = time?.split(':') || ['00', '00']

  if (editingHours.value && lhours && lhours.length === 2) {
    switchEditingMode(true)
    if (!isValidHour(lhours)) {
      selectedHour.value = '00'
    }
  } else if (editingMinutes.value && lminutes && lminutes.length === 2) {
    switchEditingMode(false)
    if (!isValidMinute(lminutes)) {
      selectedMinute.value = '00'
    }
  }

  selectedPeriod.value = period || selectedPeriod.value
  updateModelValue()
}

const selectHour = (hour: string) => {
  selectedHour.value = hour
  switchEditingMode(false)
  updateModelValue()
}

const selectMinute = (minute: string) => {
  selectedMinute.value = minute
  switchEditingMode(true)
  updateModelValue()
}

const selectPeriod = (period: string) => {
  selectedPeriod.value = period
  if (period === '24H') {
    // Adjust the selected hour for 24-hour format
    const currentHour = parseInt(selectedHour.value, 10)
    if (selectedPeriod.value === 'PM' && currentHour !== 12) {
      selectedHour.value = String((currentHour + 12) % 24).padStart(2, '0')
    } else if (selectedPeriod.value === 'AM' && currentHour === 12) {
      selectedHour.value = '00'
    }
  } else {
    // Adjust the selected hour for 12-hour format
    const currentHour = parseInt(selectedHour.value, 10)
    if (currentHour === 0) {
      selectedHour.value = '12'
    } else if (currentHour > 12) {
      selectedHour.value = String(currentHour - 12).padStart(2, '0')
    }
  }
  menu.value = false
  updateModelValue()
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  const pastedText = event.clipboardData?.getData('text')

  if (pastedText) {
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/
    const match = pastedText.match(timeRegex)

    if (match) {
      const [, lhours, lminutes] = match
      selectedHour.value = lhours?.padStart(2, '0') || selectedHour.value
      selectedMinute.value = lminutes?.padStart(2, '0') || selectedMinute.value

      // Determine period based on hours
      if (selectedPeriod.value !== '24H') {
        const hourNum = parseInt(lhours || '00', 10)
        selectedPeriod.value = hourNum >= 12 ? 'PM' : 'AM'
        if (hourNum > 12) {
          selectedHour.value = String(hourNum - 12).padStart(2, '0')
        } else if (hourNum === 0) {
          selectedHour.value = '12'
        }
      }
      updateModelValue()
    }
  }
}

// Add this watch to update the display time when the model changes externally
/* watch(
  () => model.value,
  (newValue) => {
    if (newValue) {
      const [hh, mm] = newValue.split(':')
      const hour = parseInt(hh || '00', 10)
      selectedHour.value =
        hour > 12 ? String(hour - 12).padStart(2, '0') : String(hour).padStart(2, '0')
      selectedMinute.value = mm || selectedMinute.value
      selectedPeriod.value = hour >= 12 ? 'PM' : 'AM'
    }
  },
) */
</script>
