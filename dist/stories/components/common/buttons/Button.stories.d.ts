import { StoryFn } from '@storybook/vue3';
import { ButtonProps, ButtonVariants } from '../../../../components/common/buttons/Button/types';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, JSXComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from 'vue';
import { ColorType } from '../../../../types/common/ColorType';
import { RouteLocationRaw } from 'vue-router';

declare const _default: {
    components: {
        RcSesButton: {
            new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
                symbol: {
                    type: PropType<any>;
                    default: undefined;
                };
                active: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                value: {
                    type: PropType<any>;
                    default: undefined;
                };
                flat: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                replace: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                variant: {
                    type: PropType<ButtonVariants>;
                    default: ButtonVariants;
                };
                theme: {
                    type: PropType<string>;
                    default: undefined;
                };
                color: {
                    type: PropType<ColorType>;
                    default: ColorType;
                };
                readonly: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                tag: {
                    type: PropType<string>;
                    default: undefined;
                };
                tile: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                selectedClass: {
                    type: PropType<string>;
                    default: undefined;
                };
                elevation: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                text: {
                    type: PropType<string>;
                    default: undefined;
                };
                size: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                icon: {
                    type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                    default: undefined;
                };
                href: {
                    type: PropType<string>;
                    default: undefined;
                };
                to: {
                    type: PropType<RouteLocationRaw>;
                    default: undefined;
                };
                exact: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                position: {
                    type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                    default: undefined;
                };
                location: {
                    type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
                };
                loading: {
                    type: PropType<string | boolean>;
                    default: undefined;
                };
                height: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                width: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                density: {
                    type: PropType<"default" | "comfortable" | "compact" | null>;
                    default: ("default" | "comfortable" | "compact" | null) | undefined;
                };
                border: {
                    type: PropType<string | number | boolean>;
                    default: undefined;
                };
                baseColor: {
                    type: PropType<string>;
                    default: undefined;
                };
                prependIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                appendIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                block: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                stacked: {
                    type: PropType<boolean>;
                    default: undefined;
                };
            }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
                symbol: {
                    type: PropType<any>;
                    default: undefined;
                };
                active: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                value: {
                    type: PropType<any>;
                    default: undefined;
                };
                flat: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                replace: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                variant: {
                    type: PropType<ButtonVariants>;
                    default: ButtonVariants;
                };
                theme: {
                    type: PropType<string>;
                    default: undefined;
                };
                color: {
                    type: PropType<ColorType>;
                    default: ColorType;
                };
                readonly: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                tag: {
                    type: PropType<string>;
                    default: undefined;
                };
                tile: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                selectedClass: {
                    type: PropType<string>;
                    default: undefined;
                };
                elevation: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                text: {
                    type: PropType<string>;
                    default: undefined;
                };
                size: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                icon: {
                    type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                    default: undefined;
                };
                href: {
                    type: PropType<string>;
                    default: undefined;
                };
                to: {
                    type: PropType<RouteLocationRaw>;
                    default: undefined;
                };
                exact: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                position: {
                    type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                    default: undefined;
                };
                location: {
                    type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
                };
                loading: {
                    type: PropType<string | boolean>;
                    default: undefined;
                };
                height: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                width: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                density: {
                    type: PropType<"default" | "comfortable" | "compact" | null>;
                    default: ("default" | "comfortable" | "compact" | null) | undefined;
                };
                border: {
                    type: PropType<string | number | boolean>;
                    default: undefined;
                };
                baseColor: {
                    type: PropType<string>;
                    default: undefined;
                };
                prependIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                appendIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                block: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                stacked: {
                    type: PropType<boolean>;
                    default: undefined;
                };
            }>>, {
                symbol: any;
                active: boolean;
                disabled: boolean;
                value: any;
                flat: boolean;
                replace: boolean;
                variant: ButtonVariants;
                theme: string;
                color: ColorType;
                readonly: boolean;
                tag: string;
                tile: boolean;
                selectedClass: string;
                elevation: string | number;
                text: string;
                size: string | number;
                icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
                href: string;
                to: RouteLocationRaw;
                exact: boolean;
                position: "fixed" | "static" | "absolute" | "relative" | "sticky";
                loading: string | boolean;
                height: string | number;
                maxHeight: string | number;
                maxWidth: string | number;
                minHeight: string | number;
                minWidth: string | number;
                width: string | number;
                density: "default" | "comfortable" | "compact" | null;
                border: string | number | boolean;
                baseColor: string;
                prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
                appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
                block: boolean;
                stacked: boolean;
            }, true, {}, {}, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly< ExtractPropTypes<{
                symbol: {
                    type: PropType<any>;
                    default: undefined;
                };
                active: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                value: {
                    type: PropType<any>;
                    default: undefined;
                };
                flat: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                replace: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                variant: {
                    type: PropType<ButtonVariants>;
                    default: ButtonVariants;
                };
                theme: {
                    type: PropType<string>;
                    default: undefined;
                };
                color: {
                    type: PropType<ColorType>;
                    default: ColorType;
                };
                readonly: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                tag: {
                    type: PropType<string>;
                    default: undefined;
                };
                tile: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                selectedClass: {
                    type: PropType<string>;
                    default: undefined;
                };
                elevation: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                text: {
                    type: PropType<string>;
                    default: undefined;
                };
                size: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                icon: {
                    type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                    default: undefined;
                };
                href: {
                    type: PropType<string>;
                    default: undefined;
                };
                to: {
                    type: PropType<RouteLocationRaw>;
                    default: undefined;
                };
                exact: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                position: {
                    type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                    default: undefined;
                };
                location: {
                    type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
                };
                loading: {
                    type: PropType<string | boolean>;
                    default: undefined;
                };
                height: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                maxWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minHeight: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                minWidth: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                width: {
                    type: PropType<string | number>;
                    default: undefined;
                };
                density: {
                    type: PropType<"default" | "comfortable" | "compact" | null>;
                    default: ("default" | "comfortable" | "compact" | null) | undefined;
                };
                border: {
                    type: PropType<string | number | boolean>;
                    default: undefined;
                };
                baseColor: {
                    type: PropType<string>;
                    default: undefined;
                };
                prependIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                appendIcon: {
                    type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                    default: undefined;
                };
                block: {
                    type: PropType<boolean>;
                    default: undefined;
                };
                stacked: {
                    type: PropType<boolean>;
                    default: undefined;
                };
            }>>, {}, {}, {}, {}, {
                symbol: any;
                active: boolean;
                disabled: boolean;
                value: any;
                flat: boolean;
                replace: boolean;
                variant: ButtonVariants;
                theme: string;
                color: ColorType;
                readonly: boolean;
                tag: string;
                tile: boolean;
                selectedClass: string;
                elevation: string | number;
                text: string;
                size: string | number;
                icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
                href: string;
                to: RouteLocationRaw;
                exact: boolean;
                position: "fixed" | "static" | "absolute" | "relative" | "sticky";
                loading: string | boolean;
                height: string | number;
                maxHeight: string | number;
                maxWidth: string | number;
                minHeight: string | number;
                minWidth: string | number;
                width: string | number;
                density: "default" | "comfortable" | "compact" | null;
                border: string | number | boolean;
                baseColor: string;
                prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
                appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
                block: boolean;
                stacked: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & ComponentOptionsBase<Readonly< ExtractPropTypes<{
            symbol: {
                type: PropType<any>;
                default: undefined;
            };
            active: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            value: {
                type: PropType<any>;
                default: undefined;
            };
            flat: {
                type: PropType<boolean>;
                default: boolean;
            };
            replace: {
                type: PropType<boolean>;
                default: undefined;
            };
            variant: {
                type: PropType<ButtonVariants>;
                default: ButtonVariants;
            };
            theme: {
                type: PropType<string>;
                default: undefined;
            };
            color: {
                type: PropType<ColorType>;
                default: ColorType;
            };
            readonly: {
                type: PropType<boolean>;
                default: undefined;
            };
            tag: {
                type: PropType<string>;
                default: undefined;
            };
            tile: {
                type: PropType<boolean>;
                default: undefined;
            };
            selectedClass: {
                type: PropType<string>;
                default: undefined;
            };
            elevation: {
                type: PropType<string | number>;
                default: undefined;
            };
            text: {
                type: PropType<string>;
                default: undefined;
            };
            size: {
                type: PropType<string | number>;
                default: undefined;
            };
            icon: {
                type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                default: undefined;
            };
            href: {
                type: PropType<string>;
                default: undefined;
            };
            to: {
                type: PropType<RouteLocationRaw>;
                default: undefined;
            };
            exact: {
                type: PropType<boolean>;
                default: undefined;
            };
            position: {
                type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                default: undefined;
            };
            location: {
                type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
            };
            loading: {
                type: PropType<string | boolean>;
                default: undefined;
            };
            height: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            minHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            minWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            width: {
                type: PropType<string | number>;
                default: undefined;
            };
            density: {
                type: PropType<"default" | "comfortable" | "compact" | null>;
                default: ("default" | "comfortable" | "compact" | null) | undefined;
            };
            border: {
                type: PropType<string | number | boolean>;
                default: undefined;
            };
            baseColor: {
                type: PropType<string>;
                default: undefined;
            };
            prependIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            appendIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            block: {
                type: PropType<boolean>;
                default: undefined;
            };
            stacked: {
                type: PropType<boolean>;
                default: undefined;
            };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
            symbol: any;
            active: boolean;
            disabled: boolean;
            value: any;
            flat: boolean;
            replace: boolean;
            variant: ButtonVariants;
            theme: string;
            color: ColorType;
            readonly: boolean;
            tag: string;
            tile: boolean;
            selectedClass: string;
            elevation: string | number;
            text: string;
            size: string | number;
            icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
            href: string;
            to: RouteLocationRaw;
            exact: boolean;
            position: "fixed" | "static" | "absolute" | "relative" | "sticky";
            loading: string | boolean;
            height: string | number;
            maxHeight: string | number;
            maxWidth: string | number;
            minHeight: string | number;
            minWidth: string | number;
            width: string | number;
            density: "default" | "comfortable" | "compact" | null;
            border: string | number | boolean;
            baseColor: string;
            prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            block: boolean;
            stacked: boolean;
        }, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
                append?(_: {}): any;
                prepend?(_: {}): any;
                loader?(_: {}): any;
            };
        });
    };
    title: string;
    component: {
        new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
            symbol: {
                type: PropType<any>;
                default: undefined;
            };
            active: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            value: {
                type: PropType<any>;
                default: undefined;
            };
            flat: {
                type: PropType<boolean>;
                default: boolean;
            };
            replace: {
                type: PropType<boolean>;
                default: undefined;
            };
            variant: {
                type: PropType<ButtonVariants>;
                default: ButtonVariants;
            };
            theme: {
                type: PropType<string>;
                default: undefined;
            };
            color: {
                type: PropType<ColorType>;
                default: ColorType;
            };
            readonly: {
                type: PropType<boolean>;
                default: undefined;
            };
            tag: {
                type: PropType<string>;
                default: undefined;
            };
            tile: {
                type: PropType<boolean>;
                default: undefined;
            };
            selectedClass: {
                type: PropType<string>;
                default: undefined;
            };
            elevation: {
                type: PropType<string | number>;
                default: undefined;
            };
            text: {
                type: PropType<string>;
                default: undefined;
            };
            size: {
                type: PropType<string | number>;
                default: undefined;
            };
            icon: {
                type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                default: undefined;
            };
            href: {
                type: PropType<string>;
                default: undefined;
            };
            to: {
                type: PropType<RouteLocationRaw>;
                default: undefined;
            };
            exact: {
                type: PropType<boolean>;
                default: undefined;
            };
            position: {
                type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                default: undefined;
            };
            location: {
                type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
            };
            loading: {
                type: PropType<string | boolean>;
                default: undefined;
            };
            height: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            minHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            minWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            width: {
                type: PropType<string | number>;
                default: undefined;
            };
            density: {
                type: PropType<"default" | "comfortable" | "compact" | null>;
                default: ("default" | "comfortable" | "compact" | null) | undefined;
            };
            border: {
                type: PropType<string | number | boolean>;
                default: undefined;
            };
            baseColor: {
                type: PropType<string>;
                default: undefined;
            };
            prependIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            appendIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            block: {
                type: PropType<boolean>;
                default: undefined;
            };
            stacked: {
                type: PropType<boolean>;
                default: undefined;
            };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
            symbol: {
                type: PropType<any>;
                default: undefined;
            };
            active: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            value: {
                type: PropType<any>;
                default: undefined;
            };
            flat: {
                type: PropType<boolean>;
                default: boolean;
            };
            replace: {
                type: PropType<boolean>;
                default: undefined;
            };
            variant: {
                type: PropType<ButtonVariants>;
                default: ButtonVariants;
            };
            theme: {
                type: PropType<string>;
                default: undefined;
            };
            color: {
                type: PropType<ColorType>;
                default: ColorType;
            };
            readonly: {
                type: PropType<boolean>;
                default: undefined;
            };
            tag: {
                type: PropType<string>;
                default: undefined;
            };
            tile: {
                type: PropType<boolean>;
                default: undefined;
            };
            selectedClass: {
                type: PropType<string>;
                default: undefined;
            };
            elevation: {
                type: PropType<string | number>;
                default: undefined;
            };
            text: {
                type: PropType<string>;
                default: undefined;
            };
            size: {
                type: PropType<string | number>;
                default: undefined;
            };
            icon: {
                type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                default: undefined;
            };
            href: {
                type: PropType<string>;
                default: undefined;
            };
            to: {
                type: PropType<RouteLocationRaw>;
                default: undefined;
            };
            exact: {
                type: PropType<boolean>;
                default: undefined;
            };
            position: {
                type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                default: undefined;
            };
            location: {
                type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
            };
            loading: {
                type: PropType<string | boolean>;
                default: undefined;
            };
            height: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            minHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            minWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            width: {
                type: PropType<string | number>;
                default: undefined;
            };
            density: {
                type: PropType<"default" | "comfortable" | "compact" | null>;
                default: ("default" | "comfortable" | "compact" | null) | undefined;
            };
            border: {
                type: PropType<string | number | boolean>;
                default: undefined;
            };
            baseColor: {
                type: PropType<string>;
                default: undefined;
            };
            prependIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            appendIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            block: {
                type: PropType<boolean>;
                default: undefined;
            };
            stacked: {
                type: PropType<boolean>;
                default: undefined;
            };
        }>>, {
            symbol: any;
            active: boolean;
            disabled: boolean;
            value: any;
            flat: boolean;
            replace: boolean;
            variant: ButtonVariants;
            theme: string;
            color: ColorType;
            readonly: boolean;
            tag: string;
            tile: boolean;
            selectedClass: string;
            elevation: string | number;
            text: string;
            size: string | number;
            icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
            href: string;
            to: RouteLocationRaw;
            exact: boolean;
            position: "fixed" | "static" | "absolute" | "relative" | "sticky";
            loading: string | boolean;
            height: string | number;
            maxHeight: string | number;
            maxWidth: string | number;
            minHeight: string | number;
            minWidth: string | number;
            width: string | number;
            density: "default" | "comfortable" | "compact" | null;
            border: string | number | boolean;
            baseColor: string;
            prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            block: boolean;
            stacked: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< ExtractPropTypes<{
            symbol: {
                type: PropType<any>;
                default: undefined;
            };
            active: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            value: {
                type: PropType<any>;
                default: undefined;
            };
            flat: {
                type: PropType<boolean>;
                default: boolean;
            };
            replace: {
                type: PropType<boolean>;
                default: undefined;
            };
            variant: {
                type: PropType<ButtonVariants>;
                default: ButtonVariants;
            };
            theme: {
                type: PropType<string>;
                default: undefined;
            };
            color: {
                type: PropType<ColorType>;
                default: ColorType;
            };
            readonly: {
                type: PropType<boolean>;
                default: undefined;
            };
            tag: {
                type: PropType<string>;
                default: undefined;
            };
            tile: {
                type: PropType<boolean>;
                default: undefined;
            };
            selectedClass: {
                type: PropType<string>;
                default: undefined;
            };
            elevation: {
                type: PropType<string | number>;
                default: undefined;
            };
            text: {
                type: PropType<string>;
                default: undefined;
            };
            size: {
                type: PropType<string | number>;
                default: undefined;
            };
            icon: {
                type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
                default: undefined;
            };
            href: {
                type: PropType<string>;
                default: undefined;
            };
            to: {
                type: PropType<RouteLocationRaw>;
                default: undefined;
            };
            exact: {
                type: PropType<boolean>;
                default: undefined;
            };
            position: {
                type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
                default: undefined;
            };
            location: {
                type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
            };
            loading: {
                type: PropType<string | boolean>;
                default: undefined;
            };
            height: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            maxWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            minHeight: {
                type: PropType<string | number>;
                default: undefined;
            };
            minWidth: {
                type: PropType<string | number>;
                default: undefined;
            };
            width: {
                type: PropType<string | number>;
                default: undefined;
            };
            density: {
                type: PropType<"default" | "comfortable" | "compact" | null>;
                default: ("default" | "comfortable" | "compact" | null) | undefined;
            };
            border: {
                type: PropType<string | number | boolean>;
                default: undefined;
            };
            baseColor: {
                type: PropType<string>;
                default: undefined;
            };
            prependIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            appendIcon: {
                type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
                default: undefined;
            };
            block: {
                type: PropType<boolean>;
                default: undefined;
            };
            stacked: {
                type: PropType<boolean>;
                default: undefined;
            };
        }>>, {}, {}, {}, {}, {
            symbol: any;
            active: boolean;
            disabled: boolean;
            value: any;
            flat: boolean;
            replace: boolean;
            variant: ButtonVariants;
            theme: string;
            color: ColorType;
            readonly: boolean;
            tag: string;
            tile: boolean;
            selectedClass: string;
            elevation: string | number;
            text: string;
            size: string | number;
            icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
            href: string;
            to: RouteLocationRaw;
            exact: boolean;
            position: "fixed" | "static" | "absolute" | "relative" | "sticky";
            loading: string | boolean;
            height: string | number;
            maxHeight: string | number;
            maxWidth: string | number;
            minHeight: string | number;
            minWidth: string | number;
            width: string | number;
            density: "default" | "comfortable" | "compact" | null;
            border: string | number | boolean;
            baseColor: string;
            prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
            block: boolean;
            stacked: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & ComponentOptionsBase<Readonly< ExtractPropTypes<{
        symbol: {
            type: PropType<any>;
            default: undefined;
        };
        active: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        value: {
            type: PropType<any>;
            default: undefined;
        };
        flat: {
            type: PropType<boolean>;
            default: boolean;
        };
        replace: {
            type: PropType<boolean>;
            default: undefined;
        };
        variant: {
            type: PropType<ButtonVariants>;
            default: ButtonVariants;
        };
        theme: {
            type: PropType<string>;
            default: undefined;
        };
        color: {
            type: PropType<ColorType>;
            default: ColorType;
        };
        readonly: {
            type: PropType<boolean>;
            default: undefined;
        };
        tag: {
            type: PropType<string>;
            default: undefined;
        };
        tile: {
            type: PropType<boolean>;
            default: undefined;
        };
        selectedClass: {
            type: PropType<string>;
            default: undefined;
        };
        elevation: {
            type: PropType<string | number>;
            default: undefined;
        };
        text: {
            type: PropType<string>;
            default: undefined;
        };
        size: {
            type: PropType<string | number>;
            default: undefined;
        };
        icon: {
            type: PropType<boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent)>;
            default: undefined;
        };
        href: {
            type: PropType<string>;
            default: undefined;
        };
        to: {
            type: PropType<RouteLocationRaw>;
            default: undefined;
        };
        exact: {
            type: PropType<boolean>;
            default: undefined;
        };
        position: {
            type: PropType<"fixed" | "static" | "absolute" | "relative" | "sticky">;
            default: undefined;
        };
        location: {
            type: PropType<"start" | "end" | "top" | "bottom" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center">;
        };
        loading: {
            type: PropType<string | boolean>;
            default: undefined;
        };
        height: {
            type: PropType<string | number>;
            default: undefined;
        };
        maxHeight: {
            type: PropType<string | number>;
            default: undefined;
        };
        maxWidth: {
            type: PropType<string | number>;
            default: undefined;
        };
        minHeight: {
            type: PropType<string | number>;
            default: undefined;
        };
        minWidth: {
            type: PropType<string | number>;
            default: undefined;
        };
        width: {
            type: PropType<string | number>;
            default: undefined;
        };
        density: {
            type: PropType<"default" | "comfortable" | "compact" | null>;
            default: ("default" | "comfortable" | "compact" | null) | undefined;
        };
        border: {
            type: PropType<string | number | boolean>;
            default: undefined;
        };
        baseColor: {
            type: PropType<string>;
            default: undefined;
        };
        prependIcon: {
            type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
            default: undefined;
        };
        appendIcon: {
            type: PropType<string | (string | [path: string, opacity: number])[] | JSXComponent>;
            default: undefined;
        };
        block: {
            type: PropType<boolean>;
            default: undefined;
        };
        stacked: {
            type: PropType<boolean>;
            default: undefined;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        symbol: any;
        active: boolean;
        disabled: boolean;
        value: any;
        flat: boolean;
        replace: boolean;
        variant: ButtonVariants;
        theme: string;
        color: ColorType;
        readonly: boolean;
        tag: string;
        tile: boolean;
        selectedClass: string;
        elevation: string | number;
        text: string;
        size: string | number;
        icon: boolean | (string | (string | [path: string, opacity: number])[] | JSXComponent);
        href: string;
        to: RouteLocationRaw;
        exact: boolean;
        position: "fixed" | "static" | "absolute" | "relative" | "sticky";
        loading: string | boolean;
        height: string | number;
        maxHeight: string | number;
        maxWidth: string | number;
        minHeight: string | number;
        minWidth: string | number;
        width: string | number;
        density: "default" | "comfortable" | "compact" | null;
        border: string | number | boolean;
        baseColor: string;
        prependIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
        appendIcon: string | (string | [path: string, opacity: number])[] | JSXComponent;
        block: boolean;
        stacked: boolean;
    }, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            append?(_: {}): any;
            prepend?(_: {}): any;
            loader?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        loading: {
            control: string;
            type: string;
        };
        color: {
            control: string;
            options: string[];
            type: string;
        };
    };
};
export default _default;
export declare const Primary: StoryFn<ButtonProps>;
