import React from 'react';

import type { ProductListProps } from '@/Models/ProductList';
import ProductList from '@/Models/ProductList';

const Products: React.FC<ProductListProps> = ({ theme, addToCart }) => (
    <>
        <ProductList addToCart={addToCart} theme={theme} />
    </>
);
export default Products;
