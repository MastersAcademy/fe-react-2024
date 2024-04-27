import React from 'react';

import cart from '../../assets/header/cart.svg';
import loginImg from '../../assets/header/login.svg';
import switcherMode from '../../assets/header/mode switcher.svg';
import userAdd from '../../assets/header/user_add.svg';
import logo from '../../assets/logo.svg';

import styles from './header.module.css';

export const HeaderComponent: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.header__box}>
            <img className={styles.header__logo} src={logo} alt="logo" width="55px" height="57px" />
            <button className={styles.wrapToggler} title="Light">
                <img src={switcherMode} alt="switcher Mode" className={styles.switcherMode} />
            </button>
            <div className={styles.wrap_links}>
                <nav className={styles.header__links}>
                    <a className={styles.header__link} href="./">
                        About
                    </a>
                    <a className={styles.header__link} href="./">
                        Products
                    </a>
                    <a className={styles.header__link} href="./">
                        <img src={cart} alt="cart" className={styles.cart_img} />
                    </a>
                    <button className={styles.header_btn}>
                        <img src={loginImg} alt="login Img" className={styles.login_img} />
                        <span className={styles.header_btn__text}>Login</span>
                    </button>
                    <button className={styles.header_btn__color_add}>
                        <img src={userAdd} alt="About" className={styles.user_add_img} />
                        <span className={styles.header_btn__text}> Sign up</span>
                    </button>
                </nav>
            </div>
            <div className={styles.wrap_button}>
                <button
                    type="button"
                    id="toggle_menu"
                    className={styles.navbar__toggler}
                    data-easy-toggle="#mobile-menu"
                    data-easy-class="mobile-wrap_show"
                >
                    <i></i>
                    <i></i>
                    <i></i>
                </button>
            </div>
        </div>
    </header>
);
