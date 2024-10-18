import { Component, DefineComponent } from 'vue';
import { TextFieldProps } from '../TextField/type';

type ModalComponentProps = {
    open: boolean;
    onSubmit: (value: string) => void;
    onClose: () => void;
};
export type SearchableFieldProps = Omit<TextFieldProps, 'prependInnerIcon'> & {
    modalComponent: Component<ModalComponentProps> | DefineComponent<ModalComponentProps>;
    modalProps?: any;
};
export {};
