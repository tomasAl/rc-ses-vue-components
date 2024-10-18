import { FileUploadOptions } from 'vue3-dropzone';

export type FileDropzoneProps = Partial<FileUploadOptions> & {
    name?: string;
    error?: string;
};
