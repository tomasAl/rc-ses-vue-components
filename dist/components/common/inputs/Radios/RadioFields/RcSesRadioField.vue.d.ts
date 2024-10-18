import { RadioGroupFieldProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, JSXComponent, PropType } from 'vue';
import { ColorType } from '../../../../../types/common/ColorType';
import { OptionType } from '../../../../../types/common/OptionType';

declare let __VLS_typeProps: RadioGroupFieldProps;
type __VLS_PublicProps = {
    modelValue?: string | undefined;
} & typeof __VLS_typeProps;
declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    options: () => never[];
    fieldWrapperProps: () => {};
    variant: "text";
    appendIcon: undefined;
    centerAffix: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    direction: undefined;
    disabled: boolean;
    error: undefined;
    focused: boolean;
    height: undefined;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    inline: boolean;
    label: undefined;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentHint: boolean;
    readonly: boolean;
    prependIcon: undefined;
    rules: undefined;
    theme: undefined;
    trueIcon: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    options: () => never[];
    fieldWrapperProps: () => {};
    variant: "text";
    appendIcon: undefined;
    centerAffix: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    direction: undefined;
    disabled: boolean;
    error: undefined;
    focused: boolean;
    height: undefined;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    inline: boolean;
    label: undefined;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentHint: boolean;
    readonly: boolean;
    prependIcon: undefined;
    rules: undefined;
    theme: undefined;
    trueIcon: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | undefined) => any) | undefined;
}, {
    error: string;
    id: string;
    disabled: boolean;
    type: string;
    variant: "text" | "outlined";
    theme: string;
    color: ColorType;
    readonly: boolean;
    label: string;
    height: string | number;
    maxWidth: string | number;
    minWidth: string | number;
    width: string | number;
    density: "default" | "comfortable" | "compact" | null;
    prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    name: string;
    defaultsTarget: string;
    trueIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    focused: boolean;
    maxErrors: string | number;
    rules: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[];
    validateOn: "input" | "blur" | "submit" | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy";
    validationValue: any;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    hint: string;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
    fieldWrapperProps: object;
    options: OptionType[];
    inline: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
