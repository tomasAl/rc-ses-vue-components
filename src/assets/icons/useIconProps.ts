type IconPropsBase = {
  size: number | string;
  color: string;
  dark: boolean;
  light: boolean;
};

const useIconProps = {
  size: {
    type: [Number, String],
    required: false,
    default: 24 as const
  },
  color: {
    type: String,
    default: ''
  },
  dark: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  }
};
/*
export type IconProps = {
  [Key in keyof IconPropsBase]: IconPropsBase[Key]
};*/

export default useIconProps;
