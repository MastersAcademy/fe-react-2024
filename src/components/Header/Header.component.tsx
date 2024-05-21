import { useState } from 'react';

import cart from '@/assets/header/cart.svg';
import darkIcon from '@/assets/header/dark_active.svg';
import divider from '@/assets/header/divider.svg';
import lightIcon from '@/assets/header/light_active.svg';
import loginImg from '@/assets/header/login.svg';
import menu from '@/assets/header/Menu_Duo_LG.svg';
import userAdd from '@/assets/header/user_add.svg';
import logo from '@/assets/logo.svg';
import { Component } from '@/interfaces/Component';
import type { Product } from '@/interfaces/Product';
import { Theme } from '@/interfaces/Theme';

import styles from './header.module.css';

interface HeaderProps {
    onChangeComponent: (component: Component) => void;
    activeComponent: Component;
    cartData: Array<Product>;
}

const htmlElement = document.querySelector('html');
const isLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;

export function HeaderComponent({ onChangeComponent, activeComponent, cartData }: HeaderProps) {
    let initialTheme: Theme;
    if (localStorage.getItem('theme')) {
        initialTheme = localStorage.getItem('theme') as Theme;
    } else {
        initialTheme = isLightTheme ? Theme.LIGHT : Theme.DARK;
    }

    const [theme, setTheme] = useState<Theme>(initialTheme);
    htmlElement!.dataset.theme = theme;

    function handleChangeTheme(themeText: Theme) {
        setTheme(themeText);
        localStorage.setItem('theme', themeText);
    }

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo" width="40px" height="40px" />
            <div className={styles.themes} title="Theme switcher">
                <button
                    className={`${styles.themes__btn} ${theme === Theme.LIGHT ? styles.theme_active : ''}`}
                    title="Light theme"
                    onClick={() => handleChangeTheme(Theme.LIGHT)}
                >
                    <img src={lightIcon} alt="light theme" width="20px" height="20px" />
                </button>
                <img src={divider} alt="divider" width="20px" height="20px" />
                <button
                    className={`${styles.themes__btn} ${theme === Theme.DARK ? styles.theme_active : ''}`}
                    title="Dark theme"
                    onClick={() => handleChangeTheme(Theme.DARK)}
                >
                    <img src={darkIcon} alt="dark theme" width="20px" height="20px" />
                </button>
            </div>
            <nav className={styles.header__links}>
                <button
                    className={activeComponent === Component.ABOUT ? styles.header__link_active : styles.header__link}
                    onClick={() => onChangeComponent(Component.ABOUT)}
                >
                    About
                </button>
                <button
                    className={activeComponent === Component.PRODUCTS ? styles.header__link_active : styles.header__link}
                    onClick={() => onChangeComponent(Component.PRODUCTS)}
                >
                    Products
                </button>
                <button className={`${styles.wrapper_cart} ${styles.cart__link}`} title="Cart">
                    <img src={cart} alt="Cart" width="24px" height="24px" />
                    {cartData.length > 0 && <span className={styles.product_quantity}>{cartData.length}</span>}
                </button>
                <button className={styles.header__login_btn}>
                    <img src={loginImg} alt="login Img" className={styles.login_img} />
                    <span className={styles.header_btn__text}>Login</span>
                </button>
                <button className={styles.header_btn__user_add}>
                    <img src={userAdd} alt="About" className={styles.user_add_img} />
                    <span className={styles.header_btn__text}> Sign up</span>
                </button>
                <button className={styles.header__menu_btn}>
                    <img src={menu} alt="About" className={styles.menu_img} />
                </button>
            </nav>
        </header>
    );
}
