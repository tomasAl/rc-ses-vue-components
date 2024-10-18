import { AlertProps, AlertVariants, AlertTypes } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, JSXComponent, PropType } from 'vue';
import { ColorType } from '../../../types/common/ColorType';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<AlertProps>, {
    id: undefined;
    variant: AlertVariants;
    closable: boolean;
    color: undefined;
    border: boolean;
    borderColor: undefined;
    closeIcon: string;
    closeLabel: string;
    density: ("default" | "comfortable" | "compact" | null) | undefined;
    elevation: undefined;
    height: undefined;
    icon: undefined;
    location: undefined;
    maxHeight: undefined;
    maxWidth: undefined;
    minHeight: undefined;
    minWidth: undefined;
    position: undefined;
    prominent: boolean;
    tag: string;
    text: undefined;
    theme: undefined;
    tile: boolean;
    title: undefined;
    type: AlertTypes;
    width: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<AlertProps>, {
    id: undefined;
    variant: AlertVariants;
    closable: boolean;
    color: undefined;
    border: boolean;
    borderColor: undefined;
    closeIcon: string;
    closeLabel: string;
    density: ("default" | "comfortable" | "compact" | null) | undefined;
    elevation: undefined;
    height: undefined;
    icon: undefined;
    location: undefined;
    maxHeight: undefined;
    maxWidth: undefined;
    minHeight: undefined;
    minWidth: undefined;
    position: undefined;
    prominent: boolean;
    tag: string;
    text: undefined;
    theme: undefined;
    tile: boolean;
    title: undefined;
    type: AlertTypes;
    width: undefined;
}>>>, {
    id: string;
    title: string;
    type: AlertTypes;
    variant: AlertVariants;
    theme: string;
    color: ColorType;
    tag: string;
    tile: boolean;
    elevation: string | number;
    text: string;
    icon: false | (string | (string | [path: string, opacity: number])[] | JSXComponent);
    position: "fixed" | "static" | "absolute" | "relative" | "sticky";
    location: "start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center";
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
    density: "default" | "comfortable" | "compact" | null;
    border: boolean | "start" | "end" | "top" | "bottom";
    borderColor: string;
    closable: boolean;
    closeIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    closeLabel: string;
    prominent: boolean;
}, {}>, {
    title?(_: {}): any;
    text?(_: {}): any;
    prepend?(_: {}): any;
    default?(_: {}): any;
    append?(_: {}): any;
    close?(_: {
        props: Record<string, any>;
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
