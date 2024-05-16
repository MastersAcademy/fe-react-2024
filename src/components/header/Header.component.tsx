import HeaderLogo from '@/assets/header_logo.svg?react';
import Basket from '@/assets/icons/basket.svg?react';
import Burger from '@/assets/icons/burger.svg?react';
import MoonIcon from '@/assets/icons/moon_icon.svg?react';
import Out from '@/assets/icons/out.svg?react';
import SignUp from '@/assets/icons/sign_up.svg?react';
import SunIcon from '@/assets/icons/sun_icon.svg?react';
import { Button } from '@/components/button/Button.tsx';
import { LinkTag } from '@/components/LinkTag/LinkTag.tsx';
import { headerLink } from '@/links.tsx';
import { aboutLink } from '@/links.tsx';
import { productLink } from '@/links.tsx';

import styles from './header.module.css';

export const Header = () => (
    <header className={styles.header}>
        <nav className={`${styles.content} ${styles.header__menu}`}>
            <span className={styles.burger}>
                <Burger />
            </span>
            <div className={styles.left__side}>
                <LinkTag href={headerLink}>
                    <HeaderLogo />
                </LinkTag>
                <article className={styles.icons__block}>
                    <SunIcon />
                    <span className={styles.separator}></span>
                    <MoonIcon />
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
                        <Basket className={styles.basket} />
                    </span>
                    <div className={styles.buttons__block}>
                        <Button className={`${styles.header__button} ${styles.login__button}`}>
                            <Out />
                            Login
                        </Button>

                        <Button className={`${styles.header__button} ${styles.signup__button}`}>
                            <SignUp />
                            Sign up
                        </Button>
                    </div>
                </article>
            </div>
        </nav>
    </header>
);
