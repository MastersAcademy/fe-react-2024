import React, { useState } from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ productsPerPage, totalProducts, paginate }) => {
    const [activePage, setActivePage] = useState(1);
    const pageNumbers: number[] = [];

    for (let index = 1; index <= Math.ceil(totalProducts / productsPerPage); index++) {
        pageNumbers.push(index);
    }

    const handleButtonClick = (number: number) => {
        paginate(number);
        setActivePage(number);
    };

    const goToNextPage = () => {
        const nextPage = activePage + 1;
        if (nextPage <= pageNumbers.length) {
            handleButtonClick(nextPage);
        }
    };

    const goToPreviousPage = () => {
        const previousPage = activePage - 1;
        if (previousPage >= 1) {
            handleButtonClick(previousPage);
        }
    };

    const renderPageNumbers = () =>
        pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
                <button onClick={() => handleButtonClick(number)} className={number === activePage ? styles.activeLink : styles.pageLink}>
                    {number}
                </button>
            </li>
        ));
    return (
        <ul className={styles.pagination}>
            <li className={styles.pageItem}>
                <button onClick={goToPreviousPage} className={styles.pageLink} disabled={activePage === 1}>
                    {'<'}
                </button>
            </li>
            {renderPageNumbers()}
            <li className={styles.pageItem}>
                <button onClick={goToNextPage} className={styles.pageLink} disabled={activePage === pageNumbers.length}>
                    {'>'}
                </button>
            </li>
        </ul>
    );
};
