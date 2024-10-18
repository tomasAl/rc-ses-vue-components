import { FormContainerProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, Ref, PropType } from 'vue';
import { FormContext, GenericObject } from 'vee-validate';
import { AccordionControllerState } from '../../common/Accordion/types/AccordionControllerState';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToOption<FormContainerProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToOption<FormContainerProps>>>, {}, {}>, {
    default?(_: {}): any;
    "actions-wrapper"?(_: {
        formController: FormContext<GenericObject, GenericObject> | undefined;
        accordionController: {
            collapseAll: () => void;
            expandAll: () => void;
            state: Ref<AccordionControllerState>;
            toggleAccordion: (id: string, isExpanded: boolean) => void;
        };
    }): any;
    actions?(_: {
        formController: FormContext<GenericObject, GenericObject> | undefined;
        accordionController: {
            collapseAll: () => void;
            expandAll: () => void;
            state: Ref<AccordionControllerState>;
            toggleAccordion: (id: string, isExpanded: boolean) => void;
        };
    }): any;
    "actions-after"?(_: {}): any;
}>;
export default _default;
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
