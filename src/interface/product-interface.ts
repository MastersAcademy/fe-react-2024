import type { CategoryInterface } from '@/interface/category-interface.ts';

export interface ProductsInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    images: [string];
    creationAt: string;
    updatedAt: string;
    category: CategoryInterface;
}
