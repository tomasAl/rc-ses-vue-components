import type { FileUploadOptions } from 'vue3-dropzone/dist/useDropzone'

import { FieldProps } from '@/types/inputs/FieldProps'

export type FileDropzoneProps = Partial<FileUploadOptions> & {
  name?: string
  error?: string
}
export type FileDropzoneFieldProps = FieldProps & FileDropzoneProps
