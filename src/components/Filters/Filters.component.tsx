import React from 'react';

import searchIcon from '@/assets/icons/SearchIcon.svg';
import type { FiltersReturnType } from '@/pages/products/useFilters';
import { CategoryEnum } from '@/pages/products/useFilters';

import styles from './Filters.module.css';

const FiltersComponent: React.FC<FiltersReturnType> = ({ filters, handleChangeFilter }) => (
    <>
        <div className={styles.container}>
            <section className={styles.filterFlex}>
                <div className={styles.searchContainer}>
                    <input className={styles.searchBar} type="search" placeholder={'Search...'} />
                    <button className={styles.searchButton}>
                        <img src={searchIcon} className={styles.searchIcon} alt="search" />
                    </button>
                </div>
                <div className={styles.rightFlex}>
                    <button
                        onClick={() => handleChangeFilter('category', CategoryEnum.ELECTRONICS)}
                        className={`${styles.filterButton} ${filters.category === CategoryEnum.ELECTRONICS ? styles.activeFilterButton : ''}`}
                    >
                        Electronics
                    </button>
                    <button
                        onClick={() => handleChangeFilter('category', CategoryEnum.SHOES)}
                        className={`${styles.filterButton} ${filters.category === CategoryEnum.SHOES ? styles.activeFilterButton : ''}`}
                    >
                        Shoes
                    </button>
                    <button
                        onClick={() => handleChangeFilter('category', CategoryEnum.CLOTHES)}
                        className={`${styles.filterButton} ${filters.category === CategoryEnum.CLOTHES ? styles.activeFilterButton : ''}`}
                    >
                        Clothes
                    </button>
                    <div className={styles.sortFlex}>
                        <p className={styles.sortBy}>Sort by:</p>
                        <select className={styles.sortSelect} name="price" id="price">
                            <option value="priceHighLow">Price (High - Low)</option>
                            <option value="priceLowHigh">Price (Low- High)</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default FiltersComponent;
