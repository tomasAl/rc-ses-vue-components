import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';

declare const _default: DefineComponent<{
    multiple: BooleanConstructor;
    modelValue: {
        type: PropType<string | number>;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | number) => void;
    cleared: (...args: any[]) => void;
    updateCheckAll: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    multiple: BooleanConstructor;
    modelValue: {
        type: PropType<string | number>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: string | number) => any) | undefined;
    onCleared?: ((...args: any[]) => any) | undefined;
    onUpdateCheckAll?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
}, {}>;
export default _default;
