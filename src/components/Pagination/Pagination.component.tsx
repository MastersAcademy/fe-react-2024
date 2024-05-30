import React from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    changePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, changePage }) => {
    const returnBack = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    };

    const returnForward = () => {
        if (currentPage < totalPages) {
            changePage(currentPage + 1);
        }
    };

    const generatePageNumbers = () => {
        const pages = [];
        if (totalPages <= 6) {
            for (let index = 1; index <= totalPages; index++) {
                pages.push(index);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }
            if (currentPage > 2) {
                pages.push(currentPage - 1);
            }

            if (currentPage !== 1 && currentPage !== totalPages) {
                pages.push(currentPage);
            }

            if (currentPage < totalPages - 1) {
                pages.push(currentPage + 1);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }
            pages.push(totalPages);
        }
        // if (totalPages <= 6) {
        //     for (let i = 1; i <= totalPages; i++) {
        //         pages.push(i);
        //     }
        // } else {
        //     if (currentPage > 3) pages.push('...');
        //     if (currentPage > 1) pages.push(currentPage - 1);
        //     pages.push(currentPage);
        //     if (currentPage < totalPages - 1) pages.push(currentPage + 1);
        //     if (currentPage < totalPages - 2) pages.push('...');
        // }
        return pages;
    };

    return (
        <div className={styles.pagination}>
            <button onClick={returnBack} disabled={currentPage === 1} className={styles.pageButton}>
                &lt;
            </button>
            {generatePageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                    {typeof page === 'number' ? (
                        <button
                            onClick={() => changePage(page)}
                            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span className={styles.ellipsis}>{page}</span>
                    )}
                </React.Fragment>
            ))}
            <button onClick={returnForward} disabled={currentPage === totalPages} className={styles.pageButton}>
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
