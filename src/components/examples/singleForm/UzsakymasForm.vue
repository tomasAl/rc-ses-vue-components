<template>
  <Form :validation-schema="FormSchema" @submit="submit">
    <TextField
      v-model="modelTrumpasTekstas"
      v-bind="modelTrumpasTekstasProps"
      class="form-control"
      field-label="Trumpas tekstas"
      field-description="lorem ipsum."
      name="trumpas_tekstas"
      placeholder="Tekstas"
      messages="Lorem Ipsum is simply dummy text."
      counter="10"
      :error="errors.trumpas"
    ></TextField>

    <TextField
      v-model="modelIlgasTekstas"
      v-bind="modelIlgasTekstasProps"
      class="form-control"
      field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
      field-label="Ilgas tekstas"
      field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
      name="ilgas_tekstas"
      placeholder="Tekstas"
      messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
      counter="300"
      :error="errors.ilgas"
    ></TextField>

    <SelectField
      v-model="modelTikslas"
      v-bind="modelTikslasProps"
      class="form-control"
      field-label="Tikslas"
      placeholder="Pasirinkite"
      :error="errors.tikslas"
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
      v-bind="modelTelefonasProps"
      :error="errors.telefonas"
      field-label="Telefono Nr."
      class="form-control"
      default-iso="lt"
    />

    <SearchField
      v-model="modelIeskoti"
      v-bind="modelIeskotiProps"
      :error="errors.ieskoti"
      field-label="Ieškoti"
      class="form-control"
    />

    <DatePickerField
      v-model="modelData"
      v-bind="modelDataProps"
      :error="errors.data"
      field-label="Data"
      class="form-control"
      :max-width="150"
      placeholder="Data"
    />

    <DatePickerField
      v-model="modelLaikotarpis"
      v-bind="modelLaikotarpisProps"
      :error="errors.laikotarpis"
      field-label="Laikotarpis"
      class="form-control"
      range
      :max-width="300"
      placeholder="Pradžia  →  Pabaiga"
    />

    <NumberStepperField
      v-model="modelSkaicius"
      v-bind="modelSkaiciusProps"
      :error="errors.skaicius"
      class="form-control"
      field-label="Skaičius"
      :max-width="300"
    />

    <CheckboxField
      v-model="modelSutikimas"
      v-bind="modelSutikimasProps"
      :error="errors.sutikimas"
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

    <FileDropzoneField v-model="modelFiles" field-label="Įkelti dokumentus" multiple />

    <v-btn type="submit">Submit</v-btn>
  </Form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { Form, useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

import DatePickerField from '@/components/common/inputs/DatePickerField/DatePickerField.vue'
import FileDropzoneField from '@/components/common/inputs/FileDropzoneField/FileDropzoneField.vue'

const FormSchema = yup.object({
  trumpas: yup.string().required(),
  ilgas: yup.string().required(),
  tikslas: yup.array().required(),
  telefonas: yup.string().required(),
  ieskoti: yup.string().required(),
  data: yup.date().required(),
  laikotarpis: yup.array().required(),
  skaicius: yup.number().required().min(5),
  sutikimas: yup.boolean().required(),
})

const { errors, defineField, submitForm } = useForm({
  validationSchema: toTypedSchema(FormSchema),
})

// Sita funkcija tik del to kad, jei naudojam pagal dokumentacija, tai meta typescript errora prie @submit
function getSubmitFn<Schema extends yup.ObjectSchema<Record<string, any>>>(
  _: Schema,
  callback: (values: yup.InferType<Schema>) => void,
) {
  return (values: Record<string, any>) => {
    return callback(values)
  }
}

const [modelTrumpasTekstas, modelTrumpasTekstasProps] = defineField('trumpas')
const [modelIlgasTekstas, modelIlgasTekstasProps] = defineField('ilgas')
const [modelTikslas, modelTikslasProps] = defineField('tikslas')
const [modelTelefonas, modelTelefonasProps] = defineField('telefonas')
const [modelIeskoti, modelIeskotiProps] = defineField('ieskoti')
const [modelData, modelDataProps] = defineField('data')
const [modelLaikotarpis, modelLaikotarpisProps] = defineField('laikotarpis')
const [modelSkaicius, modelSkaiciusProps] = defineField('skaicius')
const [modelSutikimas, modelSutikimasProps] = defineField('sutikimas')

const modelFiles = ref()
const modeRadioPasirinkimas = ref()
const modelPavadinimas = ref()

// NOTE-DEBUG: Neateina formos submitas, neaisku kodel :/
const submit = getSubmitFn(FormSchema, (values) => {
  console.log('my form', values)
})
</script>
