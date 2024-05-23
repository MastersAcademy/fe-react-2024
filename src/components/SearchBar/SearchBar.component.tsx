import React, { useState } from 'react';

import seachSVG from '../../assets/search.svg';

import styles from './SearchBar.module.css';

export const SearchBar: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const buttonCategoryClasses = (category: string) => {
        const categoryClasses = `${styles.buttonCategory} ${styles.buttonCaption}`;
        return activeCategory === category ? `${categoryClasses} ${styles.activeButton}` : categoryClasses;
    };

    const dropDownContentButtonClasses = `${styles.dropDownContentButton} ${styles.buttonCaption}`;

    const handleButtonCategory = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchSection}>
                <input className={styles.inputSearch} type="text" placeholder="Search..." />
                <button className={`${styles.searchButton} ${styles.buttonCaption}`}>
                    <img className={styles.cart} src={seachSVG} alt="Cart" style={{ fill: 'red' }} />
                </button>
            </div>
            <div className={styles.buttonSection}>
                <button onClick={() => handleButtonCategory('electronics')} className={buttonCategoryClasses('electronics')}>
                    Electronics
                </button>
                <button onClick={() => handleButtonCategory('shoes')} className={buttonCategoryClasses('shoes')}>
                    {' '}
                    Shoes
                </button>
                <button onClick={() => handleButtonCategory('clothes')} className={buttonCategoryClasses('clothes')}>
                    {' '}
                    Clothes
                </button>
            </div>
            <div className={styles.dropDownSection}>
                <h1 className={styles.text}> Sort by:</h1>
                <div className={styles.dropButtonSection}>
                    <button className={`${styles.dropDownButton} ${styles.buttonCaption}`}>Price (High - Low)</button>
                    <span className={styles.dropDownContent}>
                        <button className={dropDownContentButtonClasses}>Price (Low - High)</button>
                        <button className={dropDownContentButtonClasses}>Newest</button>
                        <button className={dropDownContentButtonClasses}>Oldest</button>
                    </span>
                </div>
            </div>
        </div>
    );
};
