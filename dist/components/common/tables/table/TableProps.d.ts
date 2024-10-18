interface TableItemVariant {
    name: string;
    price: number;
}
export type TableItem = {
    name: string;
    price?: number;
    variants?: TableItemVariant[];
};
export type TableProps = {
    items: TableItem[];
};
export {};
