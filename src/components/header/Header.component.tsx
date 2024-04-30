import burgerMenu from '../../assets/BurgerMenu.svg';
import darkTheme from '../../assets/DarkThemes.svg';
import lightTheme from '../../assets/LightThemes.svg';
import loginLogo from '../../assets/LoginLogo.svg';
import logoMA from '../../assets/LogoMA.svg';
import shoppingBasketLogo from '../../assets/ShoppingBasketLogo.svg';
import signupLogo from '../../assets/SignupLogo.svg';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <div className={styles.themesContainer}>
            <img className={styles.logoMA} src={logoMA} alt="Logo MA" />
            <div className={styles.themesMenuContainer}>
                <button className={styles.lightThemeButton}>
                    <img className={styles.ligthThemeIcon} src={lightTheme} alt="Ligth Theme" />
                </button>
                <hr className={styles.customHr} />
                <button className={styles.darkThemesButton}>
                    <img className={styles.darkThemeIcon} src={darkTheme} alt="Dark Theme" />
                </button>
            </div>
        </div>
        <div className={styles.menuAndAuthContainer}>
            <ul className={styles.menuItems}>
                <li className={styles.menuItemsAbout}>
                    <a className={styles.menuItemsLink} href="/#">
                        About
                    </a>
                </li>
                <li className={styles.menuItemsAbout}>
                    <a className={styles.menuItemsLink} href="/#">
                        Products
                    </a>
                </li>
            </ul>
            <div className={styles.buttonContainer}>
                <button className={styles.shoppingBasketButton}>
                    <img className={styles.shoppingBasketLogo} src={shoppingBasketLogo} alt="Shopping Basket" />
                </button>
                <button className={styles.burgerMenuButton}>
                    <img className={styles.burgerMenu} src={burgerMenu} alt="Burger Menu" />
                </button>
            </div>
            <div className={styles.authorisationPanel}>
                <button className={styles.loginButton}>
                    <img className={styles.loginLogo} src={loginLogo} alt="Login" />
                    <p>Login</p>
                </button>
                <button className={styles.signupButton}>
                    <img className={styles.signupLogo} src={signupLogo} alt="Signup" />
                    <p>Sign up</p>
                </button>
            </div>
        </div>
    </header>
);
