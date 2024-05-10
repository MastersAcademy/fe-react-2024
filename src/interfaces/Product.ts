import type { Category } from './Category';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
    creationAt: Date | string;
    updatedAt: Date | string;
}

export type { Product };
