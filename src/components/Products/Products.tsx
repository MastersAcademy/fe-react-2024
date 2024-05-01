import React, { useState } from 'react';

import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard.tsx';

import { mock } from './mock';

import styles from './products.module.css';

export const Products = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mock.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className={styles.main}>
            <div className={styles.products}>
                {currentItems.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <Pagination totalItems={mock.length} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
        </main>
    );
};
