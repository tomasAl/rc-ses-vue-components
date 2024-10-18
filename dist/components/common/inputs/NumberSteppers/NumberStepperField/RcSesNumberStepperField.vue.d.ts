import { NumberStepperFieldProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from 'vue';

declare let __VLS_typeProps: NumberStepperFieldProps;
type __VLS_PublicProps = {
    modelValue?: string | number | undefined;
} & typeof __VLS_typeProps;
declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    disabled: boolean;
    min: number;
    max: number;
    step: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | number | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    disabled: boolean;
    min: number;
    max: number;
    step: number;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string | number | undefined) => any) | undefined;
}, {
    disabled: boolean;
    max: number;
    min: number;
    step: number;
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
