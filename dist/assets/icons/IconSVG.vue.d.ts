import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';
declare const _default: DefineComponent<{
    tag: {
        type: StringConstructor;
        required: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        required: boolean;
        default: 24;
    };
    color: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    computedSize: ComputedRef<string | number>;
    computedFill: ComputedRef<string>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        required: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        required: boolean;
        default: 24;
    };
    color: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: string;
    size: string | number;
    light: boolean;
    dark: boolean;
}, {}>;
export default _default;
