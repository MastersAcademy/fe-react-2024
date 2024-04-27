import type Category from './Category.ts';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string;
    sort: 'newest' | 'oldest' | 'highestPrice' | 'lowestPrice';
    category: Category;
}

export default Product;
