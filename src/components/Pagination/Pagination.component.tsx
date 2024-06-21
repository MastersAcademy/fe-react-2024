import React from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const FIRST_PAGE = 1;
const MAX_COLLAPSED_PAGES_COUNT = 5;
const ELLIPSIS_THRESHOLD_START = 3;
const ELLIPSIS_THRESHOLD_END = 2;

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const renderPageButton = (page: number, isActive: boolean = false) => (
        <button
            className={`${styles.pageButton} ${isActive ? styles.pageButton.active : ''}`}
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={isActive}
        >
            {page}
        </button>
    );

    const shouldCollapse = totalPages > MAX_COLLAPSED_PAGES_COUNT;
    const isStartEllipsisVisible = currentPage > ELLIPSIS_THRESHOLD_START;
    const isEndEllipsisVisible = currentPage < totalPages - ELLIPSIS_THRESHOLD_END;

    const INITIAL_ITEMS = () => (
        <>
            {renderPageButton(FIRST_PAGE, currentPage === FIRST_PAGE)}
            {isStartEllipsisVisible && <span key="prevEllipsis">...</span>}
        </>
    );

    const MIDDLE_ITEMS = () => {
        const middleItems = [];
        const startPage = Math.max(FIRST_PAGE + 1, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let index = startPage; index <= endPage; index++) {
            middleItems.push(renderPageButton(index, currentPage === index));
        }
        return <>{middleItems}</>;
    };

    const LAST_ITEM = () => (
        <>
            {isEndEllipsisVisible && <span key="nextEllipsis">...</span>}
            {totalPages > FIRST_PAGE && renderPageButton(totalPages, currentPage === totalPages)}
        </>
    );

    const renderPagination = shouldCollapse ? (
        <>
            <INITIAL_ITEMS />
            <MIDDLE_ITEMS />
            <LAST_ITEM />
        </>
    ) : (
        <>
            {renderPageButton(FIRST_PAGE, currentPage === FIRST_PAGE)}
            {MIDDLE_ITEMS()}
            {totalPages > FIRST_PAGE && renderPageButton(totalPages, currentPage === totalPages)}
        </>
    );

    return (
        <div className={styles.paginationFlex}>
            <button
                className={`${styles.pageButton} ${currentPage === FIRST_PAGE ? styles.pageButton.active : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === FIRST_PAGE}
            >
                &lt;
            </button>
            {renderPagination}
            <button
                className={`${styles.pageButton} ${currentPage === totalPages ? styles.pageButton.disabled : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
