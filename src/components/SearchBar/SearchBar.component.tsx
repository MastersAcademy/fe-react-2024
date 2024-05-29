import { CategoryType } from '@/components/ProductsList/ProductsList.component.tsx';

import seachSVG from '../../assets/search.svg';

import styles from './SearchBar.module.css';

interface BarAttributes {
    currentCategory: string | null;
    setActiveCategory: (category: CategoryType | null) => void;
}

export const SearchBar: React.FC<BarAttributes> = ({ currentCategory, setActiveCategory }) => {
    const buttonCategoryClasses = (category: string) => {
        const categoryClasses = `${styles.buttonCategory} ${styles.buttonCaption}`;
        return currentCategory === category ? `${categoryClasses} ${styles.activeButton}` : categoryClasses;
    };

    const dropDownContentButtonClasses = `${styles.dropDownContentButton} ${styles.buttonCaption}`;

    const handleButtonCategory = (category: CategoryType) => {
        if (currentCategory === category) {
            setActiveCategory(null);
            localStorage.removeItem('category');
        } else {
            setActiveCategory(category);
            localStorage.setItem('category', category);
        }
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
                <button
                    onClick={() => handleButtonCategory(CategoryType.ELECTRONICS)}
                    className={buttonCategoryClasses(CategoryType.ELECTRONICS)}
                >
                    Electronics
                </button>
                <button onClick={() => handleButtonCategory(CategoryType.SHOES)} className={buttonCategoryClasses(CategoryType.SHOES)}>
                    Shoes
                </button>
                <button onClick={() => handleButtonCategory(CategoryType.CLOTHES)} className={buttonCategoryClasses(CategoryType.CLOTHES)}>
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
