<template>
  <VeeForm v-slot="{ handleSubmit }" :validation-schema="FormSchema" as="div">
    <form @submit="handleSubmit($event, onSubmit)">
      <Field v-slot="fieldProps" name="trumpas">
        <TextField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Trumpas tekstas"
          field-description="lorem ipsum."
          nname="trumpas"
          placeholder="Tekstas"
          messages="Lorem Ipsum is simply dummy text."
          counter="10"
        ></TextField>
      </Field>

      <Field v-slot="fieldProps" name="ilgas">
        <TextField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          field-label="Ilgas tekstas"
          field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          nname="ilgas"
          placeholder="Tekstas"
          messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          counter="300"
        ></TextField>
      </Field>

      <Field v-slot="fieldProps" name="tikslas">
        <SelectField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          name="tikslas"
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
      </Field>

      <Field v-slot="fieldProps" name="telefonas">
        <PhoneInputField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Telefono Nr."
          class="form-control"
          default-iso="lt"
        />
      </Field>
      <!--
      <Field v-slot="fieldProps" name="ieskoti">
        <SearchField
          v-model="modelIeskoti"
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Ieškoti"
          class="form-control"
        />
      </Field>

      <Field v-slot="fieldProps" name="data">
        <DatePickerField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Data"
          class="form-control"
          :max-width="150"
          placeholder="Data"
        />
      </Field>

      <Field v-slot="fieldProps" name="skaicius">
        <NumberStepperField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Skaičius"
          :max-width="300"
        />
      </Field> -->
      <!--
      <Field v-slot="fieldProps" name="laikotarpis">
        <DatePickerField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Laikotarpis"
          class="form-control"
          range
          :max-width="300"
          placeholder="Pradžia  →  Pabaiga"
        />
      </Field>

      <Field v-slot="fieldProps" name="skaicius">
        <NumberStepperField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Skaičius"
          :max-width="300"
        />
      </Field>

      <Field v-slot="fieldProps" name="sutikimas">
        <CheckboxField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          field-label="Sutikimas"
        />
      </Field>

      <v-divider class="form-control" />

      <Field v-slot="fieldProps" name="pavadinimas">
        <TextField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Pavadinimas"
          name="pavadinimas"
          placeholder="Pavadinimas"
        />
      </Field>

      <Field v-slot="fieldProps" name="radioPasirinkimas">
        <RadioField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Pasirinkimas"
          class="form-control bg-grey-100"
          :options="[
            { value: 'p1', label: 'Pasirinkimas #1' },
            { value: 'p2', label: 'Pasirinkimas #2' },
            { value: 'p3', label: 'Pasirinkimas #3' },
            { value: 'p4', label: 'Pasirinkimas #4' },
            { value: 'p5', label: 'Labai ilgas pasirinkimas #5' },
          ]"
        />
      </Field>

      <Field v-slot="fieldProps" name="radioButtonsPasirinkimas">
        <RadioButtonsField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
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
      </Field>

      <Field v-slot="fieldProps" name="files">
        <FileDropzoneField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Įkelti dokumentus"
          multiple
        />
      </Field>
-->
      <v-btn type="submit" color="primary" @click="submit">Submit</v-btn>
    </form>
  </VeeForm>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { Field, Form as VeeForm, useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

import DatePickerField from '@/components/common/inputs/DatePickerField/DatePickerField.vue'
import FileDropzoneField from '@/components/common/inputs/FileDropzoneField/FileDropzoneField.vue'

const FormSchema = yup.object({
  trumpas: yup.string().required(),
  // ilgas: yup.string().required(),
  tikslas: yup.array().required().min(1),
  // telefonas: yup.string().required(),
  // ieskoti: yup.string().required(),
  // data: yup.date().required(),
  // skaicius: yup.number().required().min(5),
  // pasirinkimas: yup.string().required(),
  /* laikotarpis: yup.array().required(),
  skaicius: yup.number().required().min(5),
  sutikimas: yup.boolean().required(), */
})

const { errors, defineField, submitForm } = useForm({
  validationSchema: toTypedSchema(FormSchema),
})

const telefonas = ref('')
const modelIeskoti = ref()

/* const [modelIlgasTekstas, modelIlgasTekstasProps] = defineField('ilgas')
const [modelTikslas, modelTikslasProps] = defineField('tikslas')
const [modelTelefonas, modelTelefonasProps] = defineField('telefonas')
const [modelIeskoti, modelIeskotiProps] = defineField('ieskoti')
const [modelData, modelDataProps] = defineField('data')
const [modelLaikotarpis, modelLaikotarpisProps] = defineField('laikotarpis')
const [modelSkaicius, modelSkaiciusProps] = defineField('skaicius')
const [modelSutikimas, modelSutikimasProps] = defineField('sutikimas') */

/* const modelFiles = ref()
const modeRadioPasirinkimas = ref()
const modelPavadinimas = ref() */

function submit() {
  submitForm()
}

function onSubmit(values) {
  // Submit values to API...
  // alert(JSON.stringify(values, null, 2))
  console.log(values)
  console.log(modelIeskoti.value)
}
</script>
