import { VAlert } from 'vuetify/components';
import { ColorType } from '../../../types/common/ColorType';

export type AlertVariants = 'light' | 'dark';
export type AlertTypes = 'scroll' | 'success' | 'warning' | 'error' | 'info';
export interface AlertProps {
    id?: string;
    variant?: AlertVariants;
    closable?: boolean;
    color?: ColorType;
    border?: VAlert['$props']['border'];
    borderColor?: VAlert['$props']['borderColor'];
    closeIcon?: VAlert['$props']['closeIcon'];
    closeLabel?: VAlert['$props']['closeLabel'];
    density?: VAlert['$props']['density'];
    elevation?: VAlert['$props']['elevation'];
    height?: VAlert['$props']['height'];
    icon?: VAlert['$props']['icon'];
    location?: VAlert['$props']['location'];
    maxHeight?: VAlert['$props']['maxHeight'];
    maxWidth?: VAlert['$props']['maxWidth'];
    minHeight?: VAlert['$props']['minHeight'];
    minWidth?: VAlert['$props']['minWidth'];
    position?: VAlert['$props']['position'];
    prominent?: VAlert['$props']['prominent'];
    tag?: VAlert['$props']['tag'];
    text?: VAlert['$props']['text'];
    theme?: VAlert['$props']['theme'];
    tile?: VAlert['$props']['tile'];
    title?: VAlert['$props']['title'];
    type?: AlertTypes;
    width?: VAlert['$props']['width'];
}
