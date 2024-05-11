import React from 'react';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import appStyles from '../App.module.css';
import styles from './Product.module.css';

interface ProductsListProps {
    addToCart: () => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ addToCart }) => (
    <>
        <section className={appStyles.container}>
            <div className={`${styles.productList}`}>
                {mockData.map((product: Product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </section>
    </>
);

export default ProductsList;
