import * as React from 'react';
import { useState } from 'react';

import Pagination from '@/components/Pagination/Pagination.component';

import mockData from './mocData.json';
import type { Product } from './product';
import ProductCard from './ProductCard';

import appStyles from '../App.module.css';
import styles from './Product.module.css';

interface ProductListProps {
    addToCart: () => void;
    theme: 'light' | 'dark';
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, theme }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalPages = Math.ceil(mockData.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentProducts = mockData.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <>
            <section className={appStyles.container}>
                <div className={`${styles.productList}`}>
                    {currentProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} theme={theme} />
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} changePage={handlePageChange} />
            </section>
        </>
    );
};

export default ProductList;
