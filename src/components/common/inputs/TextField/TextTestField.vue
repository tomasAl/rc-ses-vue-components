<template>
  <div>test text field</div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component
class TextTestField extends Vue {
  property = 'property value'
}

export default toNative(TextTestField)

</script>

<!--<template>
  <v-text-field v-model="inputValue" @input="onInput" />
</template>

<script lang="ts">
import { Component, Vue, toNative, Prop, Watch } from 'vue-facing-decorator'
import { VTextField } from 'vuetify/components'

@Component({
  components: {
    VTextField
  }
})
class FaceTextField extends Vue {
  @Prop({ default: '' }) readonly value!: string
  inputValue: string = this.value

  @Watch('value')
  onValueChanged(newValue: string) {
    this.inputValue = newValue
  }

  onInput(value: string) {
    this.$emit('update:value', value)
  }
}

export default toNative(FaceTextField)
</script>-->
