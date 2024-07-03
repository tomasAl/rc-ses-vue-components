<script lang="ts">
import { VTextField } from 'vuetify/components'

import { Component,  Prop } from 'vue-facing-decorator'

@Component({})
export default class TextField3 extends VTextField {
  @Prop({default: 'auto'}) private hideDetails!: boolean|string;
  @Prop({default: true}) private outlined!: boolean;
  @Prop({default: true}) private dense!: boolean
  @Prop({default: true}) private singleLine!: boolean;
  @Prop({default: 'secondary'}) private color!: string
}
</script>
