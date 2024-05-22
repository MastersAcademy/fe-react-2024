import React, { useState } from 'react';

import searchIcon from '@/assets/search.svg';

import styles from './searchBar.module.css';

const SearchBarComponent: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles.searchBarContainer}>
            <input type="text" className={styles.searchBar} placeholder="Search..." value={query} onChange={handleChange} />
            <button className={styles.searchButton}>
                <img src={searchIcon} alt="Search" className={styles.searchIcon} />
            </button>
        </div>
    );
};

export default SearchBarComponent;
