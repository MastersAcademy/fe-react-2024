import type { CategoryInterface } from '@/interfaces/category.ts';

export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: number;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: CategoryInterface;
}
