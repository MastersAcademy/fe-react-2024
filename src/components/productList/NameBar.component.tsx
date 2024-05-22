import React, { useState } from 'react';

import styles from './nameBar.module.css';

const NameBarComponent: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('');

    const handleButtonClick = (name: string) => {
        if (activeButton === name) {
            setActiveButton(''); // Deactivate if the same button is clicked
        } else {
            setActiveButton(name); // Activate the clicked button
        }
    };

    return (
        <div className={styles.buttonGroup}>
            <button
                className={`${styles.nameButton} ${activeButton === 'Electronics' ? styles.active : ''}`}
                onClick={() => handleButtonClick('Electronics')}
            >
                Electronics
            </button>
            <button
                className={`${styles.nameButton} ${activeButton === 'Shoes' ? styles.active : ''}`}
                onClick={() => handleButtonClick('Shoes')}
            >
                Shoes
            </button>
            <button
                className={`${styles.nameButton} ${activeButton === 'Clothes' ? styles.active : ''}`}
                onClick={() => handleButtonClick('Clothes')}
            >
                Clothes
            </button>
        </div>
    );
};

export default NameBarComponent;
