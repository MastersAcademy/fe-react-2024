import type { SetStateAction } from 'react';
import React from 'react';
import { useState } from 'react';

import { Pagination } from '../Pagination/Pagination.component.tsx';
import { ProductCard } from '../ProductCard/ProductCard.tsx';
import { SearchBar } from '../SearchBar/SearchBar.component';

import { response } from './ProductsResponse.js';

import styles from './ProductsList.module.css';

interface CarsCounterSetProps {
    totalCartCounter: number;
    setTotalCartCounter: (counter: number) => void;
}

export const ProductsList: React.FC<CarsCounterSetProps> = ({ totalCartCounter, setTotalCartCounter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = response.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <ul className={styles.container}>
            <SearchBar />
            <li className={styles.products}>
                {currentProducts.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        totalCartCounter={totalCartCounter}
                        setTotalCartCounter={setTotalCartCounter}
                    />
                ))}
            </li>
            <Pagination productsPerPage={productsPerPage} totalProducts={response.length} paginate={paginate} />
        </ul>
    );
};
