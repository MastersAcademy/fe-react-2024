import type { Category } from './Category';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: Category;
    creationAt: Date;
    updatedAt: Date;
    sort: 'newest' | 'oldest' | 'highestPrice' | 'lowestPrice';
}

export type { Product };
