<template>
  <RcSesTextField
    v-model="modelTrumpasTekstas"
    class="form-control"
    field-label="Trumpas tekstas"
    field-description="lorem ipsum."
    name="trumpas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text."
    counter="10"
  ></RcSesTextField>

  <RcSesTextField
    v-model="modelIlgasTekstas"
    class="form-control"
    field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    field-label="Ilgas tekstas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    name="ilgas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    counter="300"
  ></RcSesTextField>

  <RcSesSelectField
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

  <RcSesPhoneInputField
    v-model="modelTelefonas"
    field-label="Telefono Nr."
    class="form-control"
    default-iso="lt"
  />

  <RcSesSearchableField
    v-model="modelIeskoti"
    field-label="Ieškoti"
    class="form-control"
    :modal-component="SearchModal"
  />

  <RcSesDatePickerField
    v-model="modelData"
    field-label="Data"
    class="form-control"
    :max-width="150"
    placeholder="Data"
  />

  <RcSesDatePickerField
    v-model="modelLaikotarpis"
    field-label="Laikotarpis"
    class="form-control"
    range
    :max-width="300"
    placeholder="Pradžia  →  Pabaiga"
  />

  <RcSesNumberStepperField
    v-model="modelSkaicius"
    class="form-control"
    field-label="Skaičius"
    :max-width="300"
  />

  <RcSesCheckboxField
    v-model="modelSutikimas"
    class="form-control"
    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    field-label="Sutikimas"
  />

  <v-divider class="form-control" />

  <RcSesTextField
    v-model="modelPavadinimas"
    class="form-control"
    field-label="Pavadinimas"
    name="pavadinimas"
    placeholder="Pavadinimas"
  />

  <RcSesRadioField
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

  <RcSesRadioButtonsField
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

  <RcSesFileDropzoneField v-model="modelFiles" field-label="Įkelti dokumentus" multiple />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RcSesCheckboxField from '@/components/common/inputs/Checkboxes/CheckboxField/RcSesCheckboxField.vue'
import RcSesDatePickerField from '@/components/common/inputs/Datepickers/DatePickerField/RcSesDatePickerField.vue'
import RcSesFileDropzoneField from '@/components/common/inputs/FileDropzones/FileDropzoneField/RcSesFileDropzoneField.vue'
import RcSesNumberStepperField from '@/components/common/inputs/NumberSteppers/NumberStepperField/RcSesNumberStepperField.vue'
import RcSesPhoneInputField from '@/components/common/inputs/PhoneField/RcSesPhoneInputField.vue'
import RcSesRadioButtonsField from '@/components/common/inputs/RadioButtonsField/RcSesRadioButtonsField.vue'
import RcSesRadioField from '@/components/common/inputs/Radios/RadioFields/RcSesRadioField.vue'
import RcSesSearchableField from '@/components/common/inputs/SearchableField/RcSesSearchableField.vue'
import RcSesSelectField from '@/components/common/inputs/SelectField/RcSesSelectField.vue'
import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'
import SearchModal from '@/examples/modals/SearchModal.vue'

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
