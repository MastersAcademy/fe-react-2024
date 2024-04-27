import headerLogo from '../../assets/header_logo.svg';
import basket from '../../assets/icons/basket.svg';
import burger from '../../assets/icons/burger.svg';
import moonIcon from '../../assets/icons/moon_icon.svg';
import out from '../../assets/icons/out.svg';
import signUp from '../../assets/icons/sign_up.svg';
import sunIcon from '../../assets/icons/sun_icon.svg';

import styles from './header.module.css';

const headerLink = 'https://www.mastersacademy.education/';
const aboutLink = '#';
const productLink = '#';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <nav className={`${styles.content} ${styles.header__menu}`}>
            <span className={styles.burger}>
                <img src={burger} alt="burger" />
            </span>
            <div className={styles.left__side}>
                <a href={headerLink}>
                    <img src={headerLogo} alt="header_logo" className={styles.header__logo} />
                </a>
                <article className={styles.icons__block}>
                    <img src={sunIcon} alt="sun_icon" className={styles.header__icon} />
                    <span className={styles.separator}></span>
                    <img src={moonIcon} alt="moon_icon" className={styles.header__icon} />
                </article>
            </div>

            <div className={styles.right__side}>
                <ul className={styles.menu__list}>
                    <li>
                        <a className={styles.menu__list} href={aboutLink}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className={styles.menu__list} href={productLink}>
                            Products
                        </a>
                    </li>
                </ul>

                <article className={styles.flex}>
                    <span className={styles.basket__button}>
                        <img src={basket} alt="basket" className={styles.header__icon} />
                    </span>
                    <div className={styles.buttons__block}>
                        <button className={`${styles.header__button} ${styles.login__button}`}>
                            <img className={styles.header__icon} src={out} alt="out" />
                            Login
                        </button>

                        <button className={`${styles.header__button} ${styles.signup__button}`}>
                            <img className={styles.header__icon} src={signUp} alt="signup" />
                            Sign up
                        </button>
                    </div>
                </article>
            </div>
        </nav>
    </header>
);
