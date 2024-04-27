import React, { useState } from 'react';

import { BurgerIcon } from '@/assets/icons/Burger.tsx';
import { CartIcon } from '@/assets/icons/Cart.tsx';
import { LoginIcon } from '@/assets/icons/Login.tsx';
import { LogoIcon } from '@/assets/icons/Logo.tsx';
import { MoonIcon } from '@/assets/icons/Moon.tsx';
import { SignUpIcon } from '@/assets/icons/SignUp.tsx';
import { SunIcon } from '@/assets/icons/Sun.tsx';

import styles from './header.module.css';
export const Header: React.FC = () => {
    const [activePage, setActivePage] = useState('');
    const [activeTheme, setActiveTheme] = useState('');

    const handlePageChange = (page: string) => {
        setActivePage(page);
    };

    const handleThemeChange = (theme: string) => {
        setActiveTheme(theme);
    };

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.leftHeader}>
                <div>
                    <LogoIcon />
                </div>
                <div className={styles.themeWrapper}>
                    <button className={styles.themeButton} onClick={() => handleThemeChange('sun')}>
                        <SunIcon color={activeTheme === 'sun' ? '#FFF' : '#656565'} />
                    </button>

                    <div className={styles.pipe}></div>

                    <button className={styles.themeButton} onClick={() => handleThemeChange('moon')}>
                        <MoonIcon color={activeTheme === 'moon' ? '#FFF' : '#656565'} />
                    </button>
                </div>
            </div>

            <div className={styles.rightHeader}>
                <div className={styles.pages}>
                    <button className={activePage === 'about' ? styles.activeButton : 'link'} onClick={() => handlePageChange('about')}>
                        About
                    </button>
                    <button
                        className={activePage === 'products' ? styles.activeButton : 'link'}
                        onClick={() => handlePageChange('products')}
                    >
                        Products
                    </button>
                </div>

                <div className={styles.menuSide}>
                    <button>
                        <CartIcon />
                    </button>
                    <button className={styles.burgerButton}>
                        <BurgerIcon />
                    </button>

                    <div className={styles.authWrapper}>
                        <button className={styles.authButton}>
                            <LoginIcon /> Login
                        </button>
                        <button className={styles.authButton}>
                            <SignUpIcon /> Sign up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
