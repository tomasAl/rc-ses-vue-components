import { RadioProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, JSXComponent, PropType } from 'vue';
import { ColorType } from '../../../../../types/common/ColorType';

declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<RadioProps>, {
    baseColor: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    disabled: boolean;
    error: boolean;
    falseIcon: undefined;
    falseValue: undefined;
    id: undefined;
    label: undefined;
    name: undefined;
    readonly: boolean;
    theme: undefined;
    trueIcon: undefined;
    trueValue: undefined;
    type: string;
    value: undefined;
    valueComparator: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<RadioProps>, {
    baseColor: undefined;
    color: ColorType;
    defaultsTarget: undefined;
    density: undefined;
    disabled: boolean;
    error: boolean;
    falseIcon: undefined;
    falseValue: undefined;
    id: undefined;
    label: undefined;
    name: undefined;
    readonly: boolean;
    theme: undefined;
    trueIcon: undefined;
    trueValue: undefined;
    type: string;
    value: undefined;
    valueComparator: undefined;
}>>>, {
    error: boolean;
    id: string;
    disabled: boolean;
    value: any;
    type: string;
    theme: string;
    color: ColorType;
    readonly: boolean;
    label: string;
    density: "default" | "comfortable" | "compact" | null;
    baseColor: string;
    name: string;
    defaultsTarget: string;
    falseIcon: NonNullable<string | (string | [path: string, opacity: number])[] | JSXComponent>;
    trueIcon: NonNullable<string | (string | [path: string, opacity: number])[] | JSXComponent>;
    valueComparator: (a: any, b: any) => boolean;
    trueValue: any;
    falseValue: any;
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
