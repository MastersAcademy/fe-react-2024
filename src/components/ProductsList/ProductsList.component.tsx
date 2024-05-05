import type { SetStateAction } from 'react';
import { useState } from 'react';

import { Pagination } from '../Pagination/Pagination.component.tsx';
import { ProductCard } from '../ProductCard/ProductCard.tsx';

import { response } from './ProductsResponse.js';

import styles from './ProductsList.module.css';

export const ProductsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = response.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {currentProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={response.length} paginate={paginate} />
        </div>
    );
};
