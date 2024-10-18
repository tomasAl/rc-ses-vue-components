declare const useIconProps: {
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
};
export default useIconProps;
