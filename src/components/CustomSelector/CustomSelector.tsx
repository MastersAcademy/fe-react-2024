import React, { useState } from 'react';

import Icon_arrow_up from '@/assets/products/Ikon_arrow_up.svg';
import type { Selector } from '@/interfaces/Selector';

import styles from './CustomSelector.module.css';

const selectors: Selector[] = [
    {
        title: 'Price (High - Low)',
        selector: 'highToLow',
    },
    {
        title: 'Price (Low - High)',
        selector: 'lowToHigh',
    },
    {
        title: 'Newest',
        selector: 'newest',
    },
    {
        title: 'Oldest',
        selector: 'oldest',
    },
];

function CustomSelector() {
    const [currentSelector, setCurrentSelector] = useState(selectors[0]);
    const [isOpen, setIsOpen] = useState(false);

    const menuSelectors = selectors.filter((item) => item.selector !== currentSelector.selector);

    function handleChangeSelector(selector: Selector['selector']) {
        const newSelector = selectors.find((item) => item.selector === selector)!;
        setCurrentSelector(newSelector);
        setIsOpen(false);
    }

    return (
        <div className={styles.selector}>
            <menu className={`${styles.selector__menu} ${isOpen ? styles.selector__open : ''}`}>
                <button className={styles.selector__btn} onClick={() => setIsOpen((previous) => !previous)}>
                    {currentSelector.title}
                    <img
                        src={Icon_arrow_up}
                        className={isOpen ? styles.selector__icon_up : styles.selector__icon_down}
                        alt="Icon arrow up"
                    />
                </button>
                <div className={styles.selector__drop}>
                    {menuSelectors.map((item) => (
                        <button key={item.selector} onClick={() => handleChangeSelector(item.selector)}>
                            {item.title}
                        </button>
                    ))}
                </div>
            </menu>
        </div>
    );
}

export { CustomSelector };
