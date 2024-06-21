<template>
  <v-file-input
    class="rc-file-input"
    clearable
    :hide-details="true"
    :prepend-icon="null"
    v-model="model"
  >
    <template v-if="model" #prepend-inner>
      <v-icon icon="$file" color="primary"></v-icon>
    </template>

    <template #append-inner>
      <v-btn
        v-if="!model"
        class="rc-btn-upload"
        prepend-icon="$upload"
        color="grey-100">Įkelti failą
      </v-btn>
    </template>
  </v-file-input>
</template>

<script setup lang="ts">
import './FileInputStyle.scss'

const model = defineModel<File | File[] | null | undefined>()


</script>
