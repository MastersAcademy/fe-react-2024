import React from 'react';

import cart from '../../assets/header/cart.svg';
import loginImg from '../../assets/header/login.svg';
import menu from '../../assets/header/Menu_Duo_LG.svg';
import switcherMode from '../../assets/header/mode switcher.svg';
import userAdd from '../../assets/header/user_add.svg';
import logo from '../../assets/logo.svg';

import styles from './header.module.css';

export const HeaderComponent: React.FC = () => (
    <header className={styles.header}>
        <img className={styles.header__logo} src={logo} alt="logo" width="40px" height="40px" />
        <button className={styles.wrap_toggle} title="Light">
            <img src={switcherMode} alt="switcher Mode" className={styles.switcherMode} />
        </button>
        <nav className={styles.header__links}>
            <a className={styles.header__link} href="./">
                About
            </a>
            <a className={styles.header__link} href="./">
                Products
            </a>
            <a className={styles.cart__link} href="./">
                <img src={cart} alt="cart" className={styles.cart_img} />
            </a>
            <button className={styles.header__login_btn}>
                <img src={loginImg} alt="login Img" className={styles.login_img} width="24px" height="24px" />
                <span className={styles.header_btn__text}>Login</span>
            </button>
            <button className={styles.header_btn__user_add}>
                <img src={userAdd} alt="About" className={styles.user_add_img} width="24px" height="24px" />
                <span className={styles.header_btn__text}> Sign up</span>
            </button>
            <button className={styles.header__menu_btn}>
                <img src={menu} alt="About" className={styles.menu_img} />
            </button>
        </nav>
    </header>
);
