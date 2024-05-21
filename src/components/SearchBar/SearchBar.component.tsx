import React from 'react';

import searchIcon from '@/assets/products/Search_Magnifying_Glass.svg';
import { CustomSelector } from '@/components/CustomSelector/CustomSelector';

import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <section className={styles.filters_bar}>
            <form className={styles.filters_bar__search}>
                <input type="text" placeholder="Search..." />
                <button className={styles.filters_bar__btn}>
                    <img src={searchIcon} alt="Search" width="18px" height="18px" />
                </button>
            </form>

            <div className={styles.filters}>
                <button className={`${styles.filter__btn} ${styles.filters_btn_active}`}>Electronics</button>
                <button className={styles.filter__btn}>Shoes</button>
                <button className={styles.filter__btn}>Clothes</button>
            </div>
            <div className={styles.sort_by}>
                <span className={styles.sort_by__text}>Sort by:</span>
                <CustomSelector />
            </div>
        </section>
    );
}

export { SearchBar };
