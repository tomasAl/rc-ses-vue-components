import { SearchFieldProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, JSXComponent, ComputedRef, Ref, PropType } from 'vue';

declare let __VLS_typeProps: SearchFieldProps;
type __VLS_PublicProps = {
    modelValue?: string | number | undefined;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    active: boolean;
    appendIcon: undefined;
    appendInnerIcon: undefined;
    autofocus: boolean;
    baseColor: undefined;
    bgColor: undefined;
    centerAffix: undefined;
    clearable: boolean;
    clearIcon: string;
    counter: boolean;
    counterValue: undefined;
    density: undefined;
    direction: undefined;
    dirty: boolean;
    disabled: boolean;
    error: undefined;
    flat: boolean;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    loading: boolean;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentClear: boolean;
    persistentCounter: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: undefined;
    prefix: undefined;
    prependIcon: undefined;
    readonly: boolean;
    reverse: boolean;
    role: undefined;
    singleLine: undefined;
    suffix: undefined;
    theme: undefined;
    tile: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | number | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    active: boolean;
    appendIcon: undefined;
    appendInnerIcon: undefined;
    autofocus: boolean;
    baseColor: undefined;
    bgColor: undefined;
    centerAffix: undefined;
    clearable: boolean;
    clearIcon: string;
    counter: boolean;
    counterValue: undefined;
    density: undefined;
    direction: undefined;
    dirty: boolean;
    disabled: boolean;
    error: undefined;
    flat: boolean;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    loading: boolean;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentClear: boolean;
    persistentCounter: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: undefined;
    prefix: undefined;
    prependIcon: undefined;
    readonly: boolean;
    reverse: boolean;
    role: undefined;
    singleLine: undefined;
    suffix: undefined;
    theme: undefined;
    tile: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | number | undefined) => any) | undefined;
}, {
    active: boolean;
    error: string;
    id: string;
    disabled: boolean;
    reverse: boolean;
    flat: boolean;
    type: string;
    theme: string;
    readonly: boolean;
    tile: boolean;
    bgColor: string;
    loading: string | boolean;
    maxWidth: string | number;
    minWidth: string | number;
    width: string | number;
    density: "default" | "comfortable" | "compact" | null;
    baseColor: string;
    prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    name: string;
    focused: boolean;
    maxErrors: string | number;
    validateOn: "input" | "blur" | "submit" | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy";
    validationValue: any;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    hint: string;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
    placeholder: string;
    clearIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    appendInnerIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    autofocus: boolean;
    counter: string | number | boolean;
    counterValue: (number | ((value: any) => number)) & (number | ((value: any) => number));
    prefix: string;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    suffix: string;
    role: string;
}, {}>, {
    clear?(_: {}): any;
    append?(_: {
        id: ComputedRef<string>;
        messagesId: ComputedRef<string>;
        isDirty: ComputedRef<boolean>;
        isDisabled: ComputedRef<boolean>;
        isReadonly: ComputedRef<boolean>;
        isPristine: Ref<boolean>;
        isValid: ComputedRef<boolean | null>;
        isValidating: Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    "append-inner"?(_: {
        isActive: Ref<boolean>;
        isFocused: Ref<boolean>;
        controlRef: Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    counter?(_: {
        counter: string;
        max: string | number | undefined;
        value: string | number | undefined;
    }): any;
    loader?(_: {
        color: string | undefined;
        isActive: boolean;
    }): any;
    prepend?(_: {
        id: ComputedRef<string>;
        messagesId: ComputedRef<string>;
        isDirty: ComputedRef<boolean>;
        isDisabled: ComputedRef<boolean>;
        isReadonly: ComputedRef<boolean>;
        isPristine: Ref<boolean>;
        isValid: ComputedRef<boolean | null>;
        isValidating: Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
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
