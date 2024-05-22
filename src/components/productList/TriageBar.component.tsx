import React, { useState } from 'react';

import styles from './triageBar.module.css';

interface TriageBarProps {
    options: string[];
}

const TriageBarComponent: React.FC<TriageBarProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.triageBarContainer}>
            <p>Sort by:</p>
            <div className={`${styles.triageBar} ${isOpen ? styles.open : ''}`} onClick={handleToggle}>
                <div className={`${styles.selectedOption} ${isOpen ? styles.active : ''}`}>
                    {selectedOption}
                    <svg
                        className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 10l5 5 5-5"
                            stroke={isOpen ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <ul className={styles.options}>
                        {options.map((option, index) => {
                            if (option !== selectedOption) {
                                return (
                                    <li key={index} onClick={() => handleSelectOption(option)}>
                                        {option}
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TriageBarComponent;
