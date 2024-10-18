import { SelectFieldItemType, SelectFieldProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, TransitionProps, Component, JSXComponent, StyleValue, VNodeProps, AllowedComponentProps, ComponentCustomProps, VNodeChild, ComputedRef, Ref, PropType } from 'vue';

declare let __VLS_typeProps: SelectFieldProps;
type __VLS_PublicProps = {
    modelValue?: any[] | null | undefined;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    items: () => never[];
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    eager: boolean;
    hideNoData: boolean;
    hideSelected: boolean;
    itemChildren: boolean;
    itemColor: undefined;
    itemProps: undefined;
    itemTitle: string;
    itemValue: string;
    listProps: undefined;
    menu: boolean;
    menuIcon: string;
    multiple: boolean;
    openOnClear: boolean;
    returnObject: boolean;
    role: string;
    transition: string;
    valueComparator: undefined;
    searchable: boolean;
    active: boolean;
    appendIcon: undefined;
    autofocus: boolean;
    baseColor: undefined;
    bgColor: undefined;
    centerAffix: undefined;
    clearable: boolean;
    clearIcon: string;
    counter: boolean;
    counterValue: undefined;
    density: undefined;
    direction: undefined;
    dirty: boolean;
    disabled: boolean;
    error: undefined;
    flat: boolean;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    loading: boolean;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentClear: boolean;
    persistentCounter: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: undefined;
    prefix: undefined;
    prependIcon: undefined;
    prependInnerIcon: undefined;
    readonly: boolean;
    reverse: boolean;
    singleLine: undefined;
    suffix: undefined;
    theme: undefined;
    tile: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any[] | null | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    items: () => never[];
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    eager: boolean;
    hideNoData: boolean;
    hideSelected: boolean;
    itemChildren: boolean;
    itemColor: undefined;
    itemProps: undefined;
    itemTitle: string;
    itemValue: string;
    listProps: undefined;
    menu: boolean;
    menuIcon: string;
    multiple: boolean;
    openOnClear: boolean;
    returnObject: boolean;
    role: string;
    transition: string;
    valueComparator: undefined;
    searchable: boolean;
    active: boolean;
    appendIcon: undefined;
    autofocus: boolean;
    baseColor: undefined;
    bgColor: undefined;
    centerAffix: undefined;
    clearable: boolean;
    clearIcon: string;
    counter: boolean;
    counterValue: undefined;
    density: undefined;
    direction: undefined;
    dirty: boolean;
    disabled: boolean;
    error: undefined;
    flat: boolean;
    focused: boolean;
    hideSpinButtons: boolean;
    hint: undefined;
    id: undefined;
    loading: boolean;
    maxErrors: number;
    maxWidth: undefined;
    messages: undefined;
    minWidth: undefined;
    name: undefined;
    persistentClear: boolean;
    persistentCounter: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: undefined;
    prefix: undefined;
    prependIcon: undefined;
    prependInnerIcon: undefined;
    readonly: boolean;
    reverse: boolean;
    singleLine: undefined;
    suffix: undefined;
    theme: undefined;
    tile: undefined;
    type: string;
    validateOn: undefined;
    validationValue: undefined;
    width: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: any[] | null | undefined) => any) | undefined;
}, {
    active: boolean;
    error: string;
    id: string;
    disabled: boolean;
    reverse: boolean;
    flat: boolean;
    type: string;
    theme: string;
    eager: boolean;
    readonly: boolean;
    tile: boolean;
    bgColor: string;
    multiple: boolean;
    transition: NonNullable<string | boolean | ( TransitionProps & {
        component?: Component | undefined;
    })> | {
        component: Component;
    };
    menu: boolean;
    loading: string | boolean;
    maxWidth: string | number;
    minWidth: string | number;
    width: string | number;
    density: "default" | "comfortable" | "compact" | null;
    baseColor: string;
    prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    name: string;
    valueComparator: (a: any, b: any) => boolean;
    focused: boolean;
    maxErrors: string | number;
    validateOn: "input" | "blur" | "submit" | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy";
    validationValue: any;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    hint: string;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
    placeholder: string;
    clearIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    prependInnerIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    autofocus: boolean;
    counter: string | number | boolean;
    counterValue: (number | ((value: any) => number)) & (number | ((value: any) => number));
    prefix: string;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    suffix: string;
    role: string;
    items: SelectFieldItemType[];
    itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    itemChildren: NonNullable<string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined>;
    itemProps: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    returnObject: boolean;
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    listProps: Partial<{
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    }> & Omit<{
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ("single-leaf" | "leaf" | "independent" | "single-independent" | {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        } | ((mandatory: boolean) => {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        })) | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ("single-leaf" | "leaf" | "independent" | "single-independent" | {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        } | ((mandatory: boolean) => {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        })) | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
    } & {
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, "disabled" | "style" | "variant" | "tag" | "rounded" | "tile" | "mandatory" | "nav" | "density" | "slim" | "valueComparator" | "returnObject" | "itemType" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines"> & {
        items?: readonly any[] | undefined;
        itemTitle?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemValue?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemChildren?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemProps?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        selected?: unknown;
        'onUpdate:selected'?: ((value: unknown) => void) | undefined;
        'onClick:open'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        opened?: unknown;
        'onUpdate:opened'?: ((value: unknown) => void) | undefined;
    } & {
        $children?: VNodeChild | (() => VNodeChild) | {
            title?: ((arg: {
                title?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            prepend?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            append?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            subtitle?: ((arg: {
                subtitle?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            default?: (() => VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
        };
        'v-slots'?: {
            title?: false | ((arg: {
                title?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            prepend?: false | ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            append?: false | ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            subtitle?: false | ((arg: {
                subtitle?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            default?: false | (() => VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            isActive: boolean;
            isSelected: boolean;
            isIndeterminate: boolean;
            select: (value: boolean) => void;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: {
            isActive: boolean;
            isSelected: boolean;
            isIndeterminate: boolean;
            select: (value: boolean) => void;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: {
            subtitle?: string | number | undefined;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:default"?: false | (() => VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
    } & Partial<{
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    }> & Omit<{
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ("single-leaf" | "leaf" | "independent" | "single-independent" | {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        } | ((mandatory: boolean) => {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        })) | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
        style: StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: "default" | "comfortable" | "compact" | null;
        slim: boolean;
        valueComparator: (a: any, b: any) => boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<"single-leaf" | "leaf" | "independent" | "single-independent" | "classic" | {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        } | ((mandatory: boolean) => {
            select: (data: {
                id: unknown;
                value: boolean;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Map<unknown, "indeterminate" | "off" | "on">;
            in: (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, "indeterminate" | "off" | "on">;
            out: (v: Map<unknown, "indeterminate" | "off" | "on">, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
        })>;
        openStrategy: NonNullable<"multiple" | "list" | "single" | {
            open: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            select: (data: {
                id: unknown;
                value: boolean;
                opened: Set<unknown>;
                selected: Map<unknown, "indeterminate" | "off" | "on">;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown> | null;
        }>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ("single-leaf" | "leaf" | "independent" | "single-independent" | {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        } | ((mandatory: boolean) => {
            activate: (data: {
                id: unknown;
                value: boolean;
                activated: Set<unknown>;
                children: Map<unknown, unknown[]>;
                parents: Map<unknown, unknown>;
                event?: Event | undefined;
            }) => Set<unknown>;
            in: (v: unknown, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
            out: (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
        })) | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
    } & {
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, "disabled" | "style" | "variant" | "tag" | "rounded" | "tile" | "mandatory" | "nav" | "density" | "slim" | "valueComparator" | "returnObject" | "itemType" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines"> & {
        items?: readonly any[] | undefined;
        itemTitle?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemValue?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemChildren?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        itemProps?: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null | undefined;
        selected?: unknown;
        'onUpdate:selected'?: ((value: unknown) => void) | undefined;
        'onClick:open'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        opened?: unknown;
        'onUpdate:opened'?: ((value: unknown) => void) | undefined;
    } & {
        $children?: VNodeChild | (() => VNodeChild) | {
            title?: ((arg: {
                title?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            prepend?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            append?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            subtitle?: ((arg: {
                subtitle?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            default?: (() => VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
        };
        'v-slots'?: {
            title?: false | ((arg: {
                title?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            prepend?: false | ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            append?: false | ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            subtitle?: false | ((arg: {
                subtitle?: string | number | undefined;
            } & {
                item: any;
            }) => VNodeChild) | undefined;
            default?: false | (() => VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            isActive: boolean;
            isSelected: boolean;
            isIndeterminate: boolean;
            select: (value: boolean) => void;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: {
            isActive: boolean;
            isSelected: boolean;
            isIndeterminate: boolean;
            select: (value: boolean) => void;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: {
            subtitle?: string | number | undefined;
        } & {
            item: any;
        }) => VNodeChild) | undefined;
        "v-slot:default"?: false | (() => VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => VNodeChild) | undefined;
    };
    menuIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
    openOnClear: boolean;
    itemColor: string;
    searchable: boolean;
}, {}>, {
    message?(_: {
        message: string;
    }): any;
    details?(_: {
        id: ComputedRef<string>;
        messagesId: ComputedRef<string>;
        isDirty: ComputedRef<boolean>;
        isDisabled: ComputedRef<boolean>;
        isReadonly: ComputedRef<boolean>;
        isPristine: Ref<boolean>;
        isValid: ComputedRef<boolean | null>;
        isValidating: Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
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
