export interface Layout {
    rows: LayoutRow[];
};

export interface LayoutRow {
    className: string;
    items: LayoutItem[];
};

export interface LayoutItem {
    className: string;
    visual: string;
    parameters: LayoutParameter;
};

export interface LayoutParameter {
    [name: string]: string;
};