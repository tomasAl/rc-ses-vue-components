import { VSelect } from 'vuetify/components';
import { TextFieldProps } from '../TextField/type';
import { ColorType } from '../../../../types/common/ColorType';

export type SelectFieldItemType = {
    title: string;
    value: string | number;
    subtitle?: string;
};
export type SelectFieldProps = TextFieldProps & {
    items?: Array<SelectFieldItemType>;
    searchable?: boolean;
    color?: ColorType;
    multiple?: boolean;
    chips?: VSelect['$props']['chips'];
    closableChips?: VSelect['$props']['closableChips'];
    closeText?: VSelect['$props']['closeText'];
    eager?: VSelect['$props']['eager'];
    hideNoData?: VSelect['$props']['hideNoData'];
    hideSelected?: VSelect['$props']['hideSelected'];
    itemChildren?: VSelect['$props']['itemChildren'];
    itemColor?: VSelect['$props']['itemColor'];
    itemProps?: VSelect['$props']['itemProps'];
    itemTitle?: VSelect['$props']['itemTitle'];
    itemValue?: VSelect['$props']['itemValue'];
    listProps?: VSelect['$props']['listProps'];
    menu?: VSelect['$props']['menu'];
    menuIcon?: VSelect['$props']['menuIcon'];
    openOnClear?: VSelect['$props']['openOnClear'];
    returnObject?: VSelect['$props']['returnObject'];
    role?: VSelect['$props']['role'];
    transition?: VSelect['$props']['transition'];
    valueComparator?: VSelect['$props']['valueComparator'];
};
