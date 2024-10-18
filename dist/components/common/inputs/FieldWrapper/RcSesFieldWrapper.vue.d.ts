import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from 'vue';

type Props = {
    label?: string;
    description?: string;
    for?: string;
    variant?: 'text' | 'outlined';
    tooltip?: string;
    tooltipTitle?: string;
};
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    label: undefined;
    description: undefined;
    for: undefined;
    variant: string;
    tooltip: undefined;
    tooltipTitle: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    label: undefined;
    description: undefined;
    for: undefined;
    variant: string;
    tooltip: undefined;
    tooltipTitle: undefined;
}>>>, {
    variant: "text" | "outlined";
    label: string;
    description: string;
    for: string;
    tooltip: string;
    tooltipTitle: string;
}, {}>, {
    default?(_: {}): any;
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
