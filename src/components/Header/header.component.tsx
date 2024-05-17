import Cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/Log_Out.svg';
import headerLogo from '@/assets/icons/logo.svg';
import menuBtn from '@/assets/icons/Menu_Duo_LG.svg';
import headerMoon from '@/assets/icons/moon (1).svg';
import headerSun from '@/assets/icons/sun.svg';
import userAdd from '@/assets/icons/User_Add.svg';

import styles from './header.module.css';

interface HeaderProps {
    toggleAbout: () => void;
    toggleProducts: () => void;
    cartCount: number;
}

function Header({ toggleAbout, toggleProducts, cartCount }: HeaderProps) {
    return (
        <>
            <header className={`${styles.header} ${styles.flex}`}>
                <div className={`${styles.headerFlex} ${styles.flex}`}>
                    <img src={headerLogo} alt="header" width={46} />
                    <div className={`${styles.headerTheme} ${styles.flex}`}>
                        <img className={styles.headerSun} src={headerSun} alt="header" width={24} />
                        <img className={styles.headerMoon} src={headerMoon} alt="header" width={24} />
                    </div>
                </div>

                <div className={`${styles.navigation} ${styles.flex}`}>
                    <div className={`${styles.navigationBtn} ${styles.flex}`}>
                        <button className={styles.navigationAbout} onClick={toggleAbout}>
                            About
                        </button>
                        <button className={styles.navigationProduct} onClick={toggleProducts}>
                            Products
                        </button>
                    </div>

                    <div className={styles.navigationCart}>
                        <button className={styles.cart}>
                            <img src={Cart} alt="Cart" className={} />
                            {cartCount > 0 && <span className={styles.counter}>{cartCount}</span>}
                        </button>

                        <div className={styles.flex}>
                            <button className={styles.btnLogin}>
                                <img src={logOut} alt="logOut" className={styles.btnImgLogout} />
                                Log Out
                            </button>
                            <button className={styles.btnSignUp}>
                                <img src={userAdd} alt="userAdd" className={styles.btnImgLogout} />
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <img className={styles.menuBtn} src={menuBtn} alt="menu" />
            </header>
        </>
    );
}

export default Header;
