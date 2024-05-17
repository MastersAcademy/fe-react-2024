import React from 'react';

import { Component } from '@/interfaces/Component';
import type { Product } from '@/interfaces/Product';

import cart from '../../assets/header/cart.svg';
import loginImg from '../../assets/header/login.svg';
import menu from '../../assets/header/Menu_Duo_LG.svg';
import switcherMode from '../../assets/header/mode switcher.svg';
import userAdd from '../../assets/header/user_add.svg';
import logo from '../../assets/logo.svg';

import styles from './header.module.css';

interface HeaderProps {
    onChangeComponent: (component: Component) => void;
    activeComponent: Component;
    cartData: Array<Product>;
}

export function HeaderComponent({ onChangeComponent, activeComponent, cartData }: HeaderProps) {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo" width="40px" height="40px" />
            <button className={styles.wrap_toggle} title="Light">
                <img src={switcherMode} alt="switcher Mode" className={styles.switcherMode} />
            </button>
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
                <button className={`${styles.wrapper_cart} ${styles.cart__link} `} title="Cart">
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
