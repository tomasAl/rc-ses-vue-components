<template>
  <Textfield
    class="form-control"
    label="Tikslas"
    error="bla"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />
  <Textfield
    class="form-control"
    label="Tikslas"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />
  <Textfield
    readonly
    class="form-control"
    label="readonly"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />

  <SelectField
    v-model="selectModel"
    class="form-control"
    label="Tikslas"
    searchable
    :multiple="true"
    :items="[
      { title: 'test1', value: 't1' },
      { title: 'test2', value: 't2' },
      { title: 'test3', value: 't3' },
      { title: 'test4', value: 't4' },
      { title: 'laba', value: 'lab' },
      { title: 'krab', value: 'krab' },
    ]"
  />

  <Textfield class="form-control" label="Tikslas" description="pasiektas" disabled />
  <Textfield label="Tikslas" error="input error" />
  <Button variant="tonal">Test</Button>
  <SelectField
    label="Tikslas"
    name="tikslas"
    :items="[
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
      'test1',
      'test2',
      'test3',
    ]"
  />

  <v-select :items="['vienas', 'du', 'trys', 'keturi', 'penki']" multiple></v-select>

  <input v-maska="'#-#'" />
  <v-text-field v-maska="'#-#'"></v-text-field>

  <br/>
  <br/>

<!--
  <CheckboxField v-model="check" class="form-control" field-label="Sutikimas" label="test label pam tes tlabel pam labai ilgas labelas darlabel pam label pam tes tlabel pam labai ilgas labelas tes tlabel pam labai ilgas labelas ilgesnis ir title bus gal kazkada" error="test error labai labai netgi labai ilgas erroras kuris kazkada turi baiktis cia tik testas" />
 -->
  <Checkbox>Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų neatskleisiu tretiesiems asmenims.</Checkbox>
  <Radio label="test"></Radio>

  <CheckboxField v-model="check" label="Sutikimas">
    Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų neatskleisiu tretiesiems asmenims.
  </CheckboxField>

  <CheckboxField class="form-control" v-model="check" label="Sutikimas" content="1112 Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų neatskleisiu tretiesiems asmenims.">
  </CheckboxField>

  <br/><br/>
  <NumberStepperField label="Plus-minus" error="test" />

  <br/><br/>
  <NumberStepper :min="5" :max="20" :step="0.2"></NumberStepper>

  <v-text-field></v-text-field>

  <br/><br/>
  <Alert variant="light" type="success" title="Title of light" class="form-control">
    Bah trah mah this is alert...!!!
  </Alert>
  <RadioButtonsField
    label="test"
    descripton="test"
    :options="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3 Option 3', value: 'option3' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]"
  ></RadioButtonsField>

  <RadioField
    label="test"
    descripton="test"
    variant="outlined"
    :options="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3 Option 3', value: 'option3' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]"
  ></RadioField>
  <v-card variant="outlined" color="primary">
    test
  </v-card>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { ref } from 'vue'

const selectModel = ref()
const check = ref()
</script>
