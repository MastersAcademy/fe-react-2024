import React from 'react';

import type { AddToCartHandler } from '@/App';
import type { Product } from '@/interfaces/Product';

import { ProductCard } from '../ProductCard/ProductCard.component';

import styles from './ProductsList.module.css';

interface ProductsListProps {
    handleAddToCart: AddToCartHandler;
    cartData: Product[];
    data: Product[];
}

export function ProductsList({ cartData, handleAddToCart, data }: ProductsListProps) {
    return (
        <section className={styles.wrapper_list}>
            <div className={styles.product}>
                {data.map((productData) => (
                    <ProductCard key={productData.title} productData={productData} onAddToCart={handleAddToCart} cartData={cartData} />
                ))}
            </div>
        </section>
    );
}
