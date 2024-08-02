<template>
  <TextField
    v-model="modelTrumpasTekstas"
    class="form-control"
    field-label="Trumpas tekstas"
    field-description="lorem ipsum."
    name="trumpas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text."
    counter="10"
  ></TextField>

  <TextField
    v-model="modelIlgasTekstas"
    class="form-control"
    field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    field-label="Ilgas tekstas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    name="ilgas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    counter="300"
  ></TextField>

  <SelectField
    v-model="modelTikslas"
    class="form-control"
    field-label="Tikslas"
    placeholder="Pasirinkite"
    :searchable="true"
    :multiple="true"
    :items="[
      {
        title: 'Tikslas 1',
        value: 't1',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Tikslas 2', value: 't2' },
      { title: 'Tikslas 3', value: 't3' },
      {
        title: 'Tikslas 4',
        value: 't4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Tikslas 5', value: 't5' },
      { title: 'Tikslas 6', value: 't6' },
    ]"
  />

  <PhoneInputField
    v-model="modelTelefonas"
    field-label="Telefono Nr."
    class="form-control"
    default-iso="lt"
  />

  <SearchField v-model="modelIeskoti" field-label="Ieškoti" class="form-control" />

  <DatePickerField
    v-model="modelData"
    field-label="Data"
    class="form-control"
    :max-width="150"
    placeholder="Data"
  />

  <DatePickerField
    v-model="modelLaikotarpis"
    field-label="Laikotarpis"
    class="form-control"
    range
    :max-width="300"
    placeholder="Pradžia  →  Pabaiga"
  />

  <NumberStepperField
    v-model="modelSkaicius"
    class="form-control"
    field-label="Skaičius"
    :max-width="300"
  />

  <CheckboxField
    v-model="modelSutikimas"
    class="form-control"
    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    field-label="Sutikimas"
  />



  <v-divider class="form-control" />

  <TextField
    v-model="modelPavadinimas"
    class="form-control"
    field-label="Pavadinimas"
    name="pavadinimas"
    placeholder="Pavadinimas"
  />

  <RadioField
    v-model="modeRadioPasirinkimas"
    field-label="Pasirinkimas"
    class="form-control"
    :v-radio-group-props="{
      class: 'bg-grey-100',
    }"
    :options="[
      { value: 'p1', label: 'Pasirinkimas #1' },
      { value: 'p2', label: 'Pasirinkimas #2' },
      { value: 'p3', label: 'Pasirinkimas #3' },
      { value: 'p4', label: 'Pasirinkimas #4' },
      { value: 'p5', label: 'Labai ilgas pasirinkimas #5' },
    ]"
  />

  <RadioButtonsField
    field-label="Pasirinkimas"
    class="form-control"
    :options="[
      { value: 'p1', label: 'Pasirinkimas #1' },
      { value: 'p2', label: 'Pasirinkimas #2' },
      { value: 'p3', label: 'Pasirinkimas #3' },
      { value: 'p4', label: 'Pasirinkimas #4' },
      { value: 'p5', label: 'Labai ilgas pasirinkimas #5' },
    ]"
  />

  <FileDropzoneField v-model="modelFiles"  field-label="Įkelti dokumentus"  multiple />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import DatePickerField from '@/components/common/inputs/DatePickerField/DatePickerField.vue'
import FileDropzoneField from '@/components/common/inputs/FileDropzoneField/FileDropzoneField.vue'

const modelFiles = ref()
const modeRadioPasirinkimas = ref()
const modelTrumpasTekstas = ref()
const modelPavadinimas = ref()
const modelIlgasTekstas = ref()
const modelTikslas = ref()
const modelIeskoti = ref()
const modelSkaicius = ref()
const modelSutikimas = ref()
const modelTelefonas = ref()

const modelData = ref()
const modelLaikotarpis = ref()
</script>
