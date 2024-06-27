import { NavLink } from 'react-router-dom';

import appStyles from '@/App.module.css';
import logOut from '@/assets/icons/Log_Out.svg';
import headerLogo from '@/assets/icons/logo.svg';
import menuBtn from '@/assets/icons/Menu_Duo_LG.svg';
import headerMoon from '@/assets/icons/moon (1).svg';
import headerMoonLight from '@/assets/icons/MoonLight.svg';
import headerSun from '@/assets/icons/sun.svg';
import headerSunDark from '@/assets/icons/sunDark.svg';
import userAdd from '@/assets/icons/User_Add.svg';
import CartComponent from '@/components/Cart/Cart.component';
import { ROUTES } from '@/constants/routes';
import { Theme, useTheme } from '@/Context/ThemeContext';

import styles from './header.module.css';

function HeaderComponent() {
    const { theme, toggleTheme } = useTheme();
    const sunLogo = theme === 'light' ? headerSun : headerSunDark;
    const moonLogo = theme === 'light' ? headerMoon : headerMoonLight;

    return (
        <>
            <header className={`${styles.header} ${appStyles.flex} ${appStyles.container}`}>
                <div className={`${styles.headerWrapper} ${appStyles.flex}`}>
                    <img src={headerLogo} alt="header" width={46} />
                    <div className={`${styles.headerTheme} ${appStyles.flex}`}>
                        <button className={styles.headerSun} onClick={() => toggleTheme(Theme.LIGHT)}>
                            <img src={sunLogo} alt="header" width={24} />
                        </button>

                        <button className={styles.headerMoon} onClick={() => toggleTheme(Theme.DARK)}>
                            <img src={moonLogo} alt="header" width={24} />
                        </button>
                    </div>
                </div>

                <div className={`${styles.navigation} ${appStyles.flex}`}>
                    <div className={`${styles.navigationBtn} ${appStyles.flex}`}>
                        <NavLink className={({ isActive }) => (isActive ? styles.navButtonActive : styles.navButton)} to={ROUTES.ABOUT}>
                            About
                        </NavLink>

                        <NavLink className={({ isActive }) => (isActive ? styles.navButtonActive : styles.navButton)} to={ROUTES.PRODUCTS}>
                            Products
                        </NavLink>
                    </div>

                    <div className={styles.navigationCart}>
                        <CartComponent whiteCart={true} />
                        <div className={appStyles.flex}>
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

export default HeaderComponent;
