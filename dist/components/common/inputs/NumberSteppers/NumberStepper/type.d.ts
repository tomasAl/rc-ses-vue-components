import { InputProps } from '../../../../../types/inputs/FieldProps';

export type NumberStepperProps = InputProps & {
    max?: number;
    min?: number;
    step?: number;
    maxWidth?: number;
};
