import Cart from '@/assets/cart.png';
import logOut from '@/assets/Log_Out.png';
import headerLogo from '@/assets/logo.png';
import headerMoon from '@/assets/moon.png';
import headerSun from '@/assets/sun.png';
import userAdd from '@/assets/User_Add.png';

import styles from './header.module.css';

function Header() {
    return (
        <>
            <header>
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

                    <img className={styles.headerKart} src={Cart} width={24} alt={Cart} />

                    <ul className={styles.btn}>
                        <li className={styles.btnLogin}>
                            <img className={styles.logOut} src={logOut} alt="" />
                            Login
                        </li>
                        <li className={styles.btnSignUp}>
                            <img className={styles.userAdd} src={userAdd} alt="" />
                            Sign Up
                        </li>
                    </ul>
                </section>
            </header>
        </>
    );
}

export default Header;
