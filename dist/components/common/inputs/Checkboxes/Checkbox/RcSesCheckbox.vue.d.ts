import { CheckboxProps } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, JSXComponent, PropType } from 'vue';
import { ColorType } from '../../../../../types/common/ColorType';

declare let __VLS_typeProps: CheckboxProps;
type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    appendIcon: undefined;
    baseColor: undefined;
    centerAffix: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    direction: undefined;
    disabled: boolean;
    error: undefined;
    falseIcon: string;
    falseValue: undefined;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    indeterminate: boolean;
    indeterminateIcon: string;
    label: undefined;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentHint: boolean;
    readonly: boolean;
    rules: undefined;
    theme: undefined;
    trueIcon: undefined;
    trueValue: undefined;
    type: string;
    validateOn: undefined;
    value: undefined;
    validationValue: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    appendIcon: undefined;
    baseColor: undefined;
    centerAffix: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    direction: undefined;
    disabled: boolean;
    error: undefined;
    falseIcon: string;
    falseValue: undefined;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    indeterminate: boolean;
    indeterminateIcon: string;
    label: undefined;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentHint: boolean;
    readonly: boolean;
    rules: undefined;
    theme: undefined;
    trueIcon: undefined;
    trueValue: undefined;
    type: string;
    validateOn: undefined;
    value: undefined;
    validationValue: undefined;
    width: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
}, {
    error: string;
    id: string;
    disabled: boolean;
    value: any;
    type: string;
    theme: string;
    color: ColorType;
    readonly: boolean;
    label: string;
    maxWidth: string | number;
    minWidth: string | number;
    width: string | number;
    density: "default" | "comfortable" | "compact" | null;
    baseColor: string;
    appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    name: string;
    indeterminate: boolean;
    defaultsTarget: string;
    falseIcon: NonNullable<string | (string | [path: string, opacity: number])[] | JSXComponent>;
    trueIcon: NonNullable<string | (string | [path: string, opacity: number])[] | JSXComponent>;
    trueValue: any;
    falseValue: any;
    indeterminateIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
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
}, {}>, {
    label?(_: {
        label: string | undefined;
        props: Record<string, unknown>;
    }): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
