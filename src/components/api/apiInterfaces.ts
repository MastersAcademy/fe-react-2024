export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export interface Products extends Array<Product> {}
export interface Categories extends Array<Category> {}
