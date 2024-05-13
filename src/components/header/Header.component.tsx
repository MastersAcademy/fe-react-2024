import React from 'react';

import BurgerMenu from '../../assets/burger-menu.png';
import Card from '../../assets/card.png';
import DarkTheme from '../../assets/DarkThemes.svg';
import LogOut from '../../assets/door.png';
import LightTheme from '../../assets/LightThemes.svg';
import LogoMOCG from '../../assets/logoMOCG.png';
import Signup from '../../assets/sign_up.png';

import styles from './header.module.css';

interface HeaderComponentProps {
    toggleComponent: (componentName: string) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ toggleComponent }) => (
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
                <ul className={styles.menuItems}>
                    <li className={styles.menuItemsAbout}>
                        <a
                            className={styles.menuItemsLink}
                            href="/#"
                            onClick={(element: React.MouseEvent<HTMLAnchorElement>) => {
                                element.preventDefault();
                                toggleComponent('About');
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li className={styles.menuItemsAbout}>
                        <a
                            className={styles.menuItemsLink}
                            href="/#"
                            onClick={(element: React.MouseEvent<HTMLAnchorElement>) => {
                                element.preventDefault();
                                toggleComponent('Products');
                            }}
                        >
                            Products
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.Card}>
                    <img className={styles.cardIcon} src={Card} alt="Card" />
                </button>
                <button className={styles.logOutButton}>
                    <img className={styles.loginLogo} src={LogOut} alt="Log out" />
                    <p>Log out</p>
                </button>
                <button className={styles.signupButton}>
                    <img className={styles.signupLogo} src={Signup} alt="Signup" />
                    <p>Sign up</p>
                </button>
            </div>
        </div>
    </header>
);
