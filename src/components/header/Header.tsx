import CartIcon from '@assets/cart.svg?react';
import dividerIcon from '@assets/divider.svg';
import logoutIcon from '@assets/Log_Out.svg';
import logoMA from '@assets/logoMA.svg';
import moonIcon from '@assets/moon.svg';
import sunIcon from '@assets/sun.svg';
import useraddIcon from '@assets/useradd.svg';

import { Button } from '../Button/Button.tsx';
import Image from '../Image/Image.tsx';
import Link from '../Link/Link.tsx';

import styles from './header.module.css';
export const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerBox}>
            <div className={styles.headSection}>
                <Image src={logoMA} alt="logo" className="headerLogo" />
                <div className={styles.colorSwitch}>
                    <Image src={sunIcon} className={styles.headerSun} />
                    <Image src={dividerIcon} alt="dividerPic" className={styles.headerDivider} />
                    <Image src={moonIcon} alt="moonPic" className={styles.headerMoon} />
                </div>
            </div>
            <div className={styles.navSection}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.li}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.li}>
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.headSection}>
                <div className={styles.cart}>
                    <CartIcon />
                </div>
                <div className={styles.burgerMenu}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
                <div className={styles.buttons}>
                    <Button disabled className={styles.loginBut} imgSrc={logoutIcon}>
                        Login
                    </Button>
                    <Button disabled className={styles.singupBut} imgSrc={useraddIcon}>
                        Sing up
                    </Button>
                </div>
            </div>
        </div>
    </header>
);
