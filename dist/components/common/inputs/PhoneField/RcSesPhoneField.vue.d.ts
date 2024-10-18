import { PhoneInputFieldProps, PhoneInputModel, FieldSlotProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from 'vue';

declare let __VLS_typeProps: PhoneInputFieldProps;
type __VLS_PublicProps = {
    modelValue?: PhoneInputModel | undefined;
} & typeof __VLS_typeProps;
declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    defaultIso: undefined;
    fieldLabel: undefined;
    fieldDescription: undefined;
    fieldTooltip: undefined;
    veeField: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: PhoneInputModel | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    defaultIso: undefined;
    fieldLabel: undefined;
    fieldDescription: undefined;
    fieldTooltip: undefined;
    veeField: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: PhoneInputModel | undefined) => any) | undefined;
}, {
    fieldLabel: string;
    fieldDescription: string;
    fieldTooltip: string;
    defaultIso: string;
    veeField: FieldSlotProps<unknown>;
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
