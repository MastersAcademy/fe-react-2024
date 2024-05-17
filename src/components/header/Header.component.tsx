import React, { useEffect, useState } from 'react';

import BurgerMenu from '../../assets/burger-menu.png';
import Card from '../../assets/card.svg';
import DarkTheme from '../../assets/DarkThemes.svg';
import LightTheme from '../../assets/LightThemes.svg';
import Login from '../../assets/login.png';
import LogoMOCG from '../../assets/logoMOCG.png';
import Signup from '../../assets/signup.png';

import styles from './header.module.css';

interface Product {
    id: number;
}

interface HeaderComponentProps {
    toggleComponent: (componentName: string) => void;
    products: Product[];
    selectedProducts: number[];
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ toggleComponent, products, selectedProducts }) => {
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    useEffect(() => {
        setTotalItemsInCart(selectedProducts.length);
    }, [selectedProducts]);

    return (
        <header className={styles.header}>
            <div className={styles.themesContainer}>
                <img className={styles.logoMOCG} src={LogoMOCG} alt="Logo MA" />
                <div className={styles.themesMenuContainer}>
                    <button className={styles.lightThemeButton}>
                        <img className={styles.lightThemeIcon} src={LightTheme} alt="Light Theme" />
                    </button>
                    <hr className={styles.customHr} />
                    <button className={styles.darkThemesButton}>
                        <img className={styles.darkThemeIcon} src={DarkTheme} alt="Dark Theme" />
                    </button>
                </div>
            </div>
            <div className={styles.menuAndAuthContainer}>
                <div className={styles.buttonContainer}>
                    <button className={styles.burgerMenuButton}>
                        <img className={styles.burgerMenu} src={BurgerMenu} alt="Burger Menu" />
                    </button>
                </div>
                <div className={styles.aboutProdct}>
                    <button className={styles.aboutMe} onClick={() => toggleComponent('About')}>
                        About
                    </button>

                    <button className={styles.products} onClick={() => toggleComponent('Products')}>
                        Products
                    </button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.Card}>
                        <img className={styles.cardIcon} src={Card} alt="Card" />
                        {totalItemsInCart > 0 && <span className={styles.cartIndicator}>{totalItemsInCart}</span>}
                    </button>
                    <button className={styles.logOutButton}>
                        <img className={styles.loginLogo} src={Login} alt="Login" />
                        <p>Login</p>
                    </button>
                    <button className={styles.signupButton}>
                        <img className={styles.signupLogo} src={Signup} alt="Signup" />
                        <p>Sign up</p>
                    </button>
                </div>
            </div>
        </header>
    );
};
