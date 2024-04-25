import burgerMenu from '../../assets/BurgerMenu.svg';
import logoMA from '../../assets/LogoMA.svg';
import shoppingBasketLogo from '../../assets/ShoppingBasketLogo.svg';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <img className={styles.logoMA} src={logoMA} alt="Logo MA" />
        <nav className={styles.siteNavigation}>
            <button className={styles.shoppingBasket}>
                <img className={styles.shoppingBasketLogo} src={shoppingBasketLogo} alt="Shopping Basket" />
            </button>
            <button className={styles.burgerMenu}>
                <img className={styles.burgerMenu} src={burgerMenu} alt="Burger Menu" />
            </button>
        </nav>
    </header>
);
