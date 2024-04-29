import Cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/Log_Out.svg';
import headerLogo from '@/assets/icons/logo.svg';
import menuBtn from '@/assets/icons/Menu_Duo_LG.svg';
import headerMoon from '@/assets/icons/Moon.svg';
import headerSun from '@/assets/icons/sun.svg';
import userAdd from '@/assets/icons/User_Add.svg';

import styles from './header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <section className={styles.containerFlex}>
                    <div className={styles.headerFlex}>
                        <img className={styles.headerLogo} src={headerLogo} alt="header" width={46} />
                        <img className={styles.headerSun} src={headerSun} alt="header" width={24} />
                        <img className={styles.headerMoon} src={headerMoon} alt="header" width={24} />
                    </div>

                    <ul className={styles.menuFlex}>
                        <li className={styles.aboutMenu}>About</li>
                        <li className={styles.productMenu}>Products</li>
                    </ul>

                    <ul className={styles.btn}>
                        <li className={styles.kartFlex}>
                            <img className={styles.headerKart} src={Cart} alt="Cart" />
                        </li>
                        <li className={styles.btnLogin}>
                            <img className={styles.logOut} src={logOut} alt="logOut" />
                            Login
                        </li>
                        <li className={styles.btnSignUp}>
                            <img className={styles.userAdd} src={userAdd} alt="userAdd" />
                            Sign Up
                        </li>
                    </ul>
                    <img className={styles.menuBtn} src={menuBtn} alt="menu" />
                </section>
            </header>
        </>
    );
}

export default Header;
