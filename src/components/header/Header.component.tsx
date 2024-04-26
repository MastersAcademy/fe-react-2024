import headerLogo from '../../assets/header_logo.svg';
import backet from '../../assets/icons/backet.svg';
import moonIcon from '../../assets/icons/moon_icon.svg';
import out from '../../assets/icons/out.svg';
import signUp from '../../assets/icons/sign_up.svg';
import sunIcon from '../../assets/icons/sun_icon.svg';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <nav className={styles.header__menu}>
            <div className={styles.left__side}>
                <img src={headerLogo} alt="header_logo" className={styles.header__logo} />
                <article className="header__icons-block">
                    <img src={sunIcon} alt="sun_icon" className={styles.header__icon} />
                    <span className={styles.header__icon}></span>
                    <img src={moonIcon} alt="moon_icon" className={styles.header__icon} />
                </article>
            </div>

            <div className={styles.right__side}>
                <ul className={styles.menu__list}>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <img src={backet} alt="backet" />
                    </li>
                    <li>
                        <button className="header__button">
                            <img src={out} alt="out" />
                            Login
                        </button>
                    </li>
                    <li>
                        <button className="header__button">
                            <img src={signUp} alt="signup" />
                            Sign up
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);
