import React from 'react';

import searchIcon from '@/assets/search icon.svg';

import styles from './Filters.module.css';

function FiltersComponent() {
    return (
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
                        <button className={styles.filterButton}>Electronics</button>
                        <button className={styles.filterButton}>Shoes</button>
                        <button className={styles.filterButton}>Clothes</button>
                        <div className={styles.sortFlex}>
                            <p className={styles.sortBy}>Sort by:</p>
                            <select className={styles.sortSelect} name="price" id="price">
                                <option value="priceSort">Price (High - Low)</option>
                                <option value="priceSort">Price (Low- High)</option>
                                <option value="priceSort">Newest</option>
                                <option value="priceSort">Oldest</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default FiltersComponent;
