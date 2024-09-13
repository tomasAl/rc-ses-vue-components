<template>
  <v-dialog v-model="dialog" max-width="900px">
    <v-card>
      <v-card-title>Paieška pagal adresą</v-card-title>

      <v-card-text>
        <v-form ref="form" @submit.prevent="handleOnSearch">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.city"
                label="Miestas"
                :rules="[(v) => !!v || 'Privalomas laukas']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.street"
                label="Gatvė"
                :rules="[(v) => !!v || 'Privalomas laukas']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.addressNo"
                label="Pastato nr."
                :rules="[(v) => !!v || 'Privalomas laukas']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.housingNo"
                label="Korpuso nr."
                :rules="[(v) => !!v || 'Privalomas laukas']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formData.aptNo"
                label="Patalpos nr."
                :rules="[(v) => !!v || 'Privalomas laukas']"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="auto">
              <v-btn type="submit">Ieškoti</v-btn>
              <v-btn color="grey" variant="outlined" @click="handleOnReset"
                >Išvalyti</v-btn
              >
            </v-col>
          </v-row>
        </v-form>

        <v-divider class="my-4"></v-divider>

        <v-table v-if="results.length">
          <thead>
            <tr>
              <th>Reg. Nr.</th>
              <th>Daiktas(-ai)</th>
              <th>Unikalus Nr.</th>
              <th>Adresas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in results" :key="row.regNo">
              <td>{{ row.regNo }}</td>
              <td>{{ row.type }}</td>
              <td>{{ row.uniqueIdentifier }}</td>
              <td>{{ row.address }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>

      <v-card-actions>
        <v-btn :disabled="!results.length" @click="handleOnSubmit">Pridėti</v-btn>
        <v-btn color="error" variant="outlined" @click="onClose">Atšaukti</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

interface FormModel {
  city: string
  street: string
  addressNo: string
  housingNo: string
  aptNo: string
}

interface Result {
  regNo: string
  type: string
  uniqueIdentifier: string
  address: string
}

const props = defineProps<{
  modelValue: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}>()

const emit = defineEmits(['update:modelValue'])

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const form = ref<any>(null)
const formData = reactive<FormModel>({
  city: '',
  street: '',
  addressNo: '',
  housingNo: '',
  aptNo: '',
})

const results = ref<Result[]>([])

const handleOnSearch = async () => {
  const { valid } = await form.value.validate()
  if (valid) {
    results.value = [
      {
        regNo: '44/446848',
        type: 'Mišrus pastatas',
        uniqueIdentifier: '1099-2018-8012',
        address: 'Vilnius, Vydūno g. 17',
      },
    ]
  }
}

const handleOnReset = () => {
  results.value = []
  form.value.reset()
}

const handleOnSubmit = () => {
  results.value = []
  form.value.reset()
  props.onSubmit('1099-2018-8012')
  props.onClose()
}
</script>
