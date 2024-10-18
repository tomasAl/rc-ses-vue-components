import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, ComponentPublicInstance, PropType } from 'vue';

interface TooltipProps {
    title?: string;
    description?: string;
}
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<TooltipProps>, {
    title: undefined;
    description: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<TooltipProps>, {
    title: undefined;
    description: undefined;
}>>>, {
    title: string;
    description: string;
}, {}>, {
    activator?(_: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: {
            (target: Element | ComponentPublicInstance | null): void;
            value: HTMLElement | ComponentPublicInstance | null | undefined;
            readonly el: HTMLElement | undefined;
        };
    }): any;
    default?(_: {}): any;
    title?(_: {}): any;
    description?(_: {}): any;
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
