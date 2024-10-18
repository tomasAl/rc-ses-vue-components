import { ComputedRef } from 'vue';

type PropsObject = Record<string, any>;
type DefaultValuesObject = Record<string, string | number | boolean | undefined>;
export default function useDefaultProps(props: any, defaultValues: DefaultValuesObject): ComputedRef<PropsObject>;
export {};
