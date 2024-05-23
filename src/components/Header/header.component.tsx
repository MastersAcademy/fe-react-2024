import logOut from '@/assets/icons/Log_Out.svg';
import headerLogo from '@/assets/icons/logo.svg';
import menuBtn from '@/assets/icons/Menu_Duo_LG.svg';
import headerMoon from '@/assets/icons/moon (1).svg';
import headerMoonLight from '@/assets/icons/MoonLight.svg';
import headerSun from '@/assets/icons/sun.svg';
import headerSunDark from '@/assets/icons/sunDark.svg';
import userAdd from '@/assets/icons/User_Add.svg';
import CartComponent from '@/components/Cart/Cart.component';

import styles from './header.module.css';

interface HeaderProps {
    handleChangePage: (component: 'About' | 'ProductList') => void;
    cartCount: number;
    toggleTheme: (newTheme: 'light' | 'dark') => void;
    theme: 'light' | 'dark';
}

function Header({ handleChangePage, cartCount, toggleTheme, theme }: HeaderProps) {
    const sunLogo = theme === 'light' ? headerSun : headerSunDark;
    const moonLogo = theme === 'light' ? headerMoon : headerMoonLight;

    return (
        <>
            <header className={`${styles.header} ${styles.flex} ${styles.container}`}>
                <div className={`${styles.headerFlex} ${styles.flex}`}>
                    <img src={headerLogo} alt="header" width={46} />
                    <div className={`${styles.headerTheme} ${styles.flex}`}>
                        <button className={styles.headerSun} onClick={() => toggleTheme('light')}>
                            <img src={sunLogo} alt="header" width={24} />
                        </button>

                        <button className={styles.headerMoon} onClick={() => toggleTheme('dark')}>
                            <img src={moonLogo} alt="header" width={24} />
                        </button>
                    </div>
                </div>

                <div className={`${styles.navigation} ${styles.flex}`}>
                    <div className={`${styles.navigationBtn} ${styles.flex}`}>
                        <button className={styles.navigationAbout} onClick={() => handleChangePage('About')}>
                            About
                        </button>
                        <button className={styles.navigationProduct} onClick={() => handleChangePage('ProductList')}>
                            Products
                        </button>
                    </div>

                    <div className={styles.navigationCart}>
                        <CartComponent count={cartCount} onClick={() => {}} theme={theme} whiteCart={true} />
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
