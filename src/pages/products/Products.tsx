import React from 'react';

import FiltersComponent from '@/components/Filters/Filters.component';
import type { ProductListProps } from '@/Models/ProductList';
import ProductList from '@/Models/ProductList';
import { useFilters } from '@/pages/products/useFilters';

const Products: React.FC<ProductListProps> = ({ theme, addToCart }) => {
    const { filters, handleChangeFilter } = useFilters();

    return (
        <>
            <FiltersComponent filters={filters} handleChangeFilter={handleChangeFilter} />
            <ProductList addToCart={addToCart} theme={theme} />
        </>
    );
};

export default Products;
