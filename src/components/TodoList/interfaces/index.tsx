export interface Item {
    title?: string,
    key?: string | number,
};

export interface ContentProps {
    data: Item[],
    loading: boolean,
    handleDelete: Function
    handleSave: Function
};

export interface SearchProps {
    handleAdd: Function
}
