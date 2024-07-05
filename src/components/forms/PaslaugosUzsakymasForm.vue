<template>
  <CheckboxField label="test"/>
  <br/>
  <br/>

  <NumberStepperField class="form-control" />
  <TextField
    field-tooltip="uh bah"
    field-label="search test"
    v-model="modelSearch"
    class="form-control"
    :input-field-props="{
      appendIcon: '$close',
      suffix: 'blah',
      prefix: 'test',
      clearable: true,
      'onClick:clear': () => console.log('test'),
    }"
    @change="console.log('bla')"
  ></TextField>

  <SelectField
    v-model="selectModel"
    class="form-control"
    label="Tikslas"
    searchable
    :multiple="true"
    :items="[
      { title: 'test1', value: 't1', subtitle: 'lorem ipsum blah, bloom' },
      { title: 'test2', value: 't2' },
      { title: 'test3', value: 't3' },
      { title: 'test4', value: 't4' },
      { title: 'laba', value: 'lab' },
      { title: 'krab', value: 'krab' },
    ]"
  />

  <Tooltip title="test" description="blah mah">
    <template #activator="{ props }">
      <v-btn v-bind="props" @click="console.log(props)">Tooltip</v-btn>
    </template>

  </Tooltip>

  <ModalInfo
    v-model="modal"
    icon="rc-success"
    icon-color="success-600"
    title="Mes atsinaujinome!"
    description="Sveiki atvykę į naująją Registrų centro savitarnos svetainę. Čia galėsite peržiūrėti ir valdyti visus savo užsakymus ir užsakyti naujas paslaugas."
  >
    <template #activator="{ props }">
      <v-btn v-bind="props">Open Modal</v-btn>
    </template>
    <template #actions>
      <v-btn variant="tonal" @click="console.log('cusotm action')">Custom Action</v-btn>
      <v-btn variant="tonal" @click="modal = false">Close</v-btn>
    </template>
  </ModalInfo>

  <v-tabs v-model="tab" class="rc-tabs">
    <Tab value="one" disabled>Item One 1</Tab>
    <Tab value="two" variant="text">Item Two</Tab>
    <Tab value="three" variant="text">Item Three</Tab>
  </v-tabs>
  <v-tabs-window v-model="tab" class="form-control">
    <v-tabs-window-item value="one"> One </v-tabs-window-item>
    <v-tabs-window-item value="two"> Two </v-tabs-window-item>
    <v-tabs-window-item value="three"> Three </v-tabs-window-item>
  </v-tabs-window>

  <v-tabs v-model="tab" class="rc-tabs">
    <Tab value="one" variant="outlined" disabled>Visos <span class="count">0</span></Tab>
    <Tab value="two" variant="outlined">Item Two <span class="count">0</span></Tab>
    <Tab value="three" variant="outlined">Item Three <span class="count">0</span></Tab>
  </v-tabs>

  <v-tabs-window v-model="tab" class="form-control">
    <v-tabs-window-item value="one"> One </v-tabs-window-item>
    <v-tabs-window-item value="two"> Two </v-tabs-window-item>
    <v-tabs-window-item value="three"> Three </v-tabs-window-item>
  </v-tabs-window>


  <v-text-field name="bla">

    <template v-slot:append>
      <v-btn icon="null">
        <v-icon icon="$tooltip"/>
        <v-tooltip activator="parent">
          my tooltip
        </v-tooltip>
      </v-btn>
    </template>
  </v-text-field>

<!--
  <TextField
    class="form-control"
    label="Tikslas"
    readonly
    tooltip="blah"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  >
    <template v-slot:append>
      <v-btn icon="null">
        <v-icon icon="$tooltip"/>
        <v-tooltip activator="parent">
          my tooltip
        </v-tooltip>
      </v-btn>
    </template>
  </TextField>


  <TextField
    class="form-control"
    label="Tikslas"
    description="pasiektas ir labai ilgas tekstas kartais buna ir uzlipa ant kito lauko ir uzlipa ant kito lauko ir uzlipa ant kito lauko"
  />
  <TextField
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

  <TextField class="form-control" label="Tikslas" description="pasiektas" disabled />
  <TextField label="Tikslas" error="input error" />
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
  />-->

  <input v-maska="'#-#'" />
  <v-text-field v-maska="'#-#'"></v-text-field>

  <br />
  <br />

  <!--
  <CheckboxField v-model="check" class="form-control" field-label="Sutikimas" label="test label pam tes tlabel pam labai ilgas labelas darlabel pam label pam tes tlabel pam labai ilgas labelas tes tlabel pam labai ilgas labelas ilgesnis ir title bus gal kazkada" error="test error labai labai netgi labai ilgas erroras kuris kazkada turi baiktis cia tik testas" />
 -->
<!--
  <Checkbox
    >Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų
    neatskleisiu tretiesiems asmenims.</Checkbox
  >
  <Radio label="test"></Radio>

  <CheckboxField v-model="check" label="Sutikimas">
    Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų
    neatskleisiu tretiesiems asmenims.
  </CheckboxField>

  <CheckboxField
    v-model="check"
    class="form-control"
    label="Sutikimas"
    content="1112 Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų neatskleisiu tretiesiems asmenims."
  >
  </CheckboxField>
-->

<!--  <br /><br />
  <NumberStepperField label="Plus-minus" error="test" />

  <br /><br />
  <NumberStepper :min="5" :max="20" :step="0.2"></NumberStepper>

  <v-text-field></v-text-field>

  <br /><br />
  <Alert variant="light" type="success" title="Title of light" class="form-control">
    Bah trah mah this is alert...!!!
  </Alert>
  <RadioButtonsField
    label="test"
    descripton="test"
    class="form-control"
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
    class="form-control"
    :options="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3 Option 3', value: 'option3' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]"
  ></RadioField>-->
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { ref } from 'vue'
import VueDatepicker from '@/components/common/inputs/DatePickerField/VueDatepicker.vue'

const modelSearch = ref('search')
const modal = ref(false)
const tab = ref()
const selectModel = ref()
const check = ref()
</script>
