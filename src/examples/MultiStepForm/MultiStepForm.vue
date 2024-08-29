<template>
  <form>
    <ServiceFormContainer :accordion-controller="accordionController">
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
          <PapildomosPaslaugosForm />
        </Accordion>
        <Accordion id="serviceForm">
          <PaslaugosUzsakymasForm />
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
  serviceForm: {
    expanded: true,
    state: 'pending',
    title: 'Paslaugos užsakymas',
  },
  issueForm: {
    expanded: false,
    state: 'completed',
    title: 'Išdavimas',
  },
  additionalServicesForm: {
    expanded: false,
    state: 'completed',
    title: 'Reikalingos papildomos paslaugos',
  },
  termsForm: {
    expanded: false,
    state: 'completed',
    title: 'Terminai ir sąlygos',
  },
})

const FormSchema = yup.object({
  isdavimoBudas: yup.string().required(),
  rcPadalinys: yup.string().required(),
  // Add other form fields as needed
})

const formController = useForm({
  validationSchema: toTypedSchema(FormSchema),
})
</script>
