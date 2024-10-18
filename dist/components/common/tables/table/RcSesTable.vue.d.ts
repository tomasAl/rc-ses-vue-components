import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
