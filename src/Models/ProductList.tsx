import * as React from 'react';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import appStyles from '../App.module.css';
import styles from './Product.module.css';

interface ProductListProps {
    addToCart: () => void;
    theme: 'light' | 'dark';
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, theme }) => (
    <>
        <section className={appStyles.container}>
            <div className={`${styles.productList}`}>
                {mockData.map((product: Product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} theme={theme} />
                ))}
            </div>
        </section>
    </>
);

export default ProductList;
