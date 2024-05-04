import type { Category } from './Category';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAd: string;
    updatedAd: string;
    category: Category;
}
