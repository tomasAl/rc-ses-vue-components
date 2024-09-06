import type { FileUploadOptions } from 'vue3-dropzone/dist/useDropzone'

export type FileDropzoneProps = Partial<FileUploadOptions> & {
  name?: string
  error?: string
}
