import { VRadio } from 'vuetify/components';
import { ColorType } from '../../../../../types/common/ColorType';
import { InputProps } from '../../../../../types/inputs/FieldProps';

export type RadioProps = Omit<InputProps, 'placeholder' | 'error'> & {
    baseColor?: VRadio['$props']['baseColor'];
    error?: VRadio['$props']['error'];
    color?: ColorType;
    defaultsTarget?: VRadio['$props']['defaultsTarget'];
    density?: VRadio['$props']['density'];
    falseIcon?: VRadio['$props']['falseIcon'];
    falseValue?: VRadio['$props']['falseValue'];
    id?: VRadio['$props']['id'];
    inline?: VRadio['$props']['inline'];
    label?: VRadio['$props']['label'];
    multiple?: VRadio['$props']['multiple'];
    theme?: VRadio['$props']['theme'];
    trueIcon?: VRadio['$props']['trueIcon'];
    trueValue?: VRadio['$props']['trueValue'];
    type?: VRadio['$props']['type'];
    modelValue?: VRadio['$props']['modelValue'];
    value?: VRadio['$props']['value'];
    valueComparator?: VRadio['$props']['valueComparator'];
};
