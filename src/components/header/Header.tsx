import CartIcon from '@assets/cart.svg?react';
import logoutIcon from '@assets/Log_Out.svg';
import logoMA from '@assets/logoMA.svg';
import useraddIcon from '@assets/useradd.svg';

import { Button } from '../Button/Button.tsx';
import { ColorSwitch } from '../ColorSwitch/ColorSwitch.tsx';
import Image from '../Image/Image.tsx';
import Link from '../Link/Link.tsx';

import styles from './header.module.css';
export const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerBox}>
            <div className={styles.headSection}>
                <Image src={logoMA} alt="logo" className="headerLogo" />
                <ColorSwitch />
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
                    <div className={styles.burgerLine} />
                    <div className={styles.burgerLine} />
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
