<template>
  <v-text-field v-bind="$props"> </v-text-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { makeVTextFieldProps } from 'vuetify/lib/components/VTextField/VTextField.mjs'

export default defineComponent({
  name: 'TextField2',
  props: makeVTextFieldProps(),
})
</script>


<!--<script setup lang="ts">

import type { VTextField } from 'vuetify/components'
/*
type UnwrapReadonlyArray<A> = A extends Readonly<Array<infer I>> ? I : A*/
type UnwrapReadonlyArray<A> = A extends Readonly<Array<infer I>> ? I : never;
/*type ValidationRule = UnwrapReadonlyArray<VTextField['rules']>*/
type MyCustom = UnwrapReadonlyArray<VTextField['rules']>
const props = defineProps<MyCustom>()

</script>-->


<!--
<script lang="ts">
import type { ComponentObjectPropsOptions, ExtractPropTypes } from 'vue'
import { propsFactory } from 'vuetify/lib/util/propsFactory.mjs'

function buildExtendingProps<B, E>(baseProps: B, extendedProps: E, source: any)
{
  const combinedProps = { ...baseProps, ...extendedProps }
  const builder = propsFactory(combinedProps, source)
  return builder() as ComponentObjectPropsOptions<B & ExtractPropTypes<E>>
}
</script>


<script setup lang="ts">
import { makeVTextFieldProps } from 'vuetify/lib/components/VTextField/VTextField.mjs'
import type { VTextField } from 'vuetify/lib/components/index.mjs'

type VTextFieldProps = InstanceType<typeof VTextField>['$props']

const props = defineProps(buildExtendingProps(
  makeVTextFieldProps() as VTextFieldProps,
  {},
  'TextField2'
))

console.log('textfield2 props: ', props)
</script>-->
<!--<script>
import { makeVTextFieldProps } from 'vuetify/lib/components/VTextField/VTextField.mjs'
import { VTextField } from 'vuetify/components'

export default {
  extends: VTextField,
}
</script>-->

<!--
<script setup lang="ts">
import { ExtractPublicPropTypes, useAttrs } from 'vue'
import { makeVTextFieldProps } from 'vuetify/lib/components/VTextField/VTextField.mjs'

/*const attrs = useAttrs()*/

defineOptions({
  inheritAttrs: false,
})

const textProps: { [ key: string ]: any } = makeVTextFieldProps() as const
console.log('text2 attrs', textProps)
type ExtractedTextFieldProps = ExtractPublicPropTypes<typeof textProps>
const props = defineProps<ExtractedTextFieldProps>()
/*

type TextFieldProps = Extract<VTextField['$props'], { key: string }>

const props = defineProps<TextFieldProps>()

const model = defineModel<any>()
// defineEmits(['update:modelValue'])
*/
</script>
-->
