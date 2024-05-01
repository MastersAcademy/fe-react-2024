import React, { useState } from 'react';

import { Button } from '../Button/Button.tsx';

import styles from './pagination.module.css';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
        pageNumbers.push(index);
    }

    const firstPageIndex = Math.max(currentPage - 1, 1);
    const lastPageIndex = Math.min(firstPageIndex + 2, Math.ceil(totalItems / itemsPerPage));

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={styles.pagiBox}>
            <ul className={styles.pagination}>
                <li className={currentPage === 1 ? 'disabled' : ''}>
                    <Button onClick={goToPreviousPage} className={styles.nonactive}>
                        &laquo;
                    </Button>
                </li>
                {pageNumbers.slice(firstPageIndex - 1, lastPageIndex).map((number) => (
                    <li key={number}>
                        <Button onClick={() => paginate(number)} className={currentPage === number ? styles.active : styles.nonactive}>
                            {number}
                        </Button>
                    </li>
                ))}
                <li className={currentPage === Math.ceil(totalItems / itemsPerPage) ? 'disabled' : ''}>
                    <Button onClick={goToNextPage} className={styles.nonactive}>
                        &raquo;
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export { Pagination };
