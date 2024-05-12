import appStyles from '@/App.module.css';
import Cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/Log_Out.svg';
import headerLogo from '@/assets/icons/logo.svg';
import menuBtn from '@/assets/icons/Menu_Duo_LG.svg';
import headerMoon from '@/assets/icons/Moon.svg';
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
            <header className={styles.header}>
                <div className={appStyles.container}>
                    <section className={styles.containerFlex}>
                        <div className={styles.headerFlex}>
                            <img src={headerLogo} alt="header" width={46} />
                            <img className={styles.headerSun} src={headerSun} alt="header" width={24} />
                            <img className={styles.headerMoon} src={headerMoon} alt="header" width={24} />
                        </div>

                        <div className={styles.menuFlex}>
                            <button className={styles.aboutMenu} onClick={toggleAbout}>
                                About
                            </button>
                            <button className={styles.productMenu} onClick={toggleProducts}>
                                Products
                            </button>
                        </div>

                        <div className={styles.btn}>
                            <button className={styles.kartFlex}>
                                <img src={Cart} alt="Cart" className={styles.cartIcon} />
                                {cartCount > 0 && <span className={styles.counter}>{cartCount}</span>}
                            </button>
                            <div className={styles.btnLogin}>
                                <img src={logOut} alt="logOut" />
                                Login
                            </div>
                            <div className={styles.btnSignUp}>
                                <img src={userAdd} alt="userAdd" />
                                Sign Up
                            </div>
                        </div>
                        <img className={styles.menuBtn} src={menuBtn} alt="menu" />
                    </section>
                </div>
            </header>
        </>
    );
}

export default Header;
