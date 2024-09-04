<template>
  <form>
    <ServiceFormContainer
      :accordion-controller="accordionController"
      :form-controller="formController"
    >
      <template #actions>
        <FormActions />
      </template>

      <template #actions-after>
        <FormActionsAfter />
      </template>

      <template #default>
        <Accordion id="basicForm" />

        <Accordion id="issueForm">
          <IsdavimasForm :form-controller="formController" />
        </Accordion>

        <Accordion id="additionalServicesForm">
          <PapildomosPaslaugosForm :form-controller="formController" />
        </Accordion>
        <Accordion id="serviceForm">
          <PaslaugosUzsakymasForm :form-controller="formController" />
        </Accordion>

        <Accordion id="termsForm">
          <TerminaiForm />
        </Accordion>
      </template>
    </ServiceFormContainer>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import IsdavimasForm from '@/examples/MultiStepForm/components/IsdavimasForm.vue'
import PapildomosPaslaugosForm from '@/examples/MultiStepForm/components/PapildomosPaslaugosForm.vue'
import PaslaugosUzsakymasForm from '@/examples/MultiStepForm/components/PaslaugosUzsakymasForm.vue'
import TerminaiForm from '@/examples/MultiStepForm/components/TerminaiForm.vue'
import FormActions from '@/examples/shared/FormActions.vue'
import FormActionsAfter from '@/examples/shared/FormActionsAfter.vue'

const accordionController = useAccordionController({
  basicForm: {
    expanded: false,
    state: 'completed',
    title: 'Bazinė informacija',
  },
  issueForm: {
    expanded: false,
    state: 'pending',
    title: 'Išdavimas',
  },
  additionalServicesForm: {
    expanded: false,
    state: 'pending',
    title: 'Reikalingos papildomos paslaugos',
  },
  serviceForm: {
    expanded: true,
    state: 'active',
    title: 'Paslaugos užsakymas',
  },
  termsForm: {
    expanded: false,
    state: 'pending',
    title: 'Terminai ir sąlygos',
  },
})

const FormSchema = yup.object({
  isdavimoBudas: yup.string().required(),
  padalinys: yup.string().required(),
  skaicius: yup.number().required().min(5),
  paslauga: yup.string().required(),

  tikslas: yup.string().required(),
  teisinisPagrindas: yup.string().required(),
  sutikimas: yup.boolean().required(),
  terminas: yup.string().required(),
  egzemplioriuSkaicius: yup.number().required().min(5),

  terminoSutikimas: yup.boolean().required(),
})

const formController = useForm({
  validationSchema: toTypedSchema(FormSchema),
})

function handleSubmit() {
  formController.submitForm()

  if (formController.meta.value.valid) {
    console.log('Form is valid', formController.values)
  }
}
</script>
