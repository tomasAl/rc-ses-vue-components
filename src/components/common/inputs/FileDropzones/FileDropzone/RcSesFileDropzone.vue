<template>
  <div class="dropzone-wrapper">
    <div
      class="dropzone"
      v-bind="getRootProps()"
      :class="{
        isDragActive,
        'rc-disabled': restProps.disabled,
        'rc-error': error,
      }"
    >
      <input v-bind="getInputProps()" :name="name" />
      <div class="dropzone-content">
        <v-icon icon="$upload" class="mb-2" size="24" />
        <p class="text-subtitle-1 mb-1 font-weight-strong">
          Nutempkite failą čia arba įkelkite iš kompiuterio
        </p>
        <p class="text-subtitle-2 font-italic">Maksumalus failo dydis: 5MB</p>
      </div>
    </div>

    <v-list v-if="state.files.length > 0" class="files">
      <v-list-item
        v-for="(file, index) in state.files"
        :key="index"
        class="file-item"
        rounded
      >
        <template #append>
          <v-icon
            class="icon-delete"
            icon="$delete"
            size="20"
            @click="handleClickDeleteFile(index)"
          />
        </template>
        <v-list-item-title class="text-subtitle-1">{{ file.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { FileRejectReason, useDropzone } from 'vue3-dropzone'

import './style.scss'
import { FileDropzoneProps } from './type'

const model = defineModel<any[]>()
const props = defineProps<FileDropzoneProps>()

const state = reactive({
  files: [] as any[],
})

const { onDrop, getFilesFromEvent, name, error, ...restProps } =
  props as FileDropzoneProps

const filesFromEvent = getFilesFromEvent === undefined ? {} : { getFilesFromEvent }

function updateModel() {
  model.value = state.files
}

function onDropFile(acceptFiles: any[], rejectReasons: FileRejectReason[], event: Event) {
  state.files = acceptFiles
  updateModel()

  if (onDrop) {
    onDrop(acceptFiles, rejectReasons, event)
  }
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop: onDropFile,
  ...filesFromEvent,
  ...restProps,
})

function handleClickDeleteFile(index: number) {
  state.files.splice(index, 1)
  updateModel()
}
</script>
