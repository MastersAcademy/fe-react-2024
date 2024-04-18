import headerLogo from '@/assets/logo.svg';

import { Auth } from '../auth';
import { Basket } from '../basket';
import { ThemeSwitcher } from '../theme-switcher';
import { WidthContainer } from '../width-container';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <WidthContainer>
            <div className={styles['header__container']}>
                <div className={styles['header__inner_left']}>
                    <a href="#">
                        <img src={headerLogo} alt="" />
                    </a>
                    <ThemeSwitcher />
                </div>

                <div className={styles['header__inner_right']}>
                    <nav>
                        <ul className={styles['header__nav-list']}>
                            <li className={`${styles['header__nav-item']} ${styles['header__nav-item_active']}`}>
                                <a href="#">About</a>
                            </li>
                            <li className={styles['header__nav-item']}>
                                <a href="#">Products</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles['header__basket']}>
                        <Basket />
                    </div>
                    <Auth />
                </div>
            </div>
        </WidthContainer>
    </header>
);
