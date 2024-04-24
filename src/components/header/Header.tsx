import Button from '../Button/Button.tsx';
import Image from '../Image/Image.tsx';
import Link from '../Link/Link.tsx';

import styles from './header.module.css';
export const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerBox}>
            <div className={styles.headSection}>
                <Image src="src\assets\logo.png" alt="logo" className="headerLogo"></Image>
                <div className={styles.colorSwitch}>
                    <Image src="src\assets\sun.png" alt="sunPic" className={styles.headerSun}></Image>
                    <Image src="src\assets\divider.png" alt="dividerPic" className={styles.headerDivider}></Image>
                    <Image src="src\assets\moon.png" alt="moonPic" className={styles.headerMoon}></Image>
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
                    <Image src="src\assets\cart.png" alt="cartPic" className="headerCart"></Image>
                </div>
                <div className={styles.burgerMenu}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
                <div className={styles.buttons}>
                    <Button disabled className={styles.loginBut} imgSrc="src\assets\Log_Out.png" imgHeight={24} imgWidth={24}>
                        Login
                    </Button>
                    <Button disabled className={styles.singupBut} imgSrc="src\assets\User_Add.png" imgHeight={24} imgWidth={24}>
                        Sing up
                    </Button>
                </div>
            </div>
        </div>
    </header>
);
