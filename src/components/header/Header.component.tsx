import burgerSVG from '../../assets/burger.svg';
import cartSVG from '../../assets/cart_icon.svg';
import darkSVG from '../../assets/dark_mode.svg';
import lightSVG from '../../assets/light_mode.svg';
import loginSVG from '../../assets/login.svg';
import logoSVG from '../../assets/logo.svg';
import separatorSVG from '../../assets/separator.svg';
import singUpSVG from '../../assets/sign_up.svg';

import headerStyles from './header.module.css';

export const HeaderComponent = () => (
    <div className={headerStyles.container}>
        <div className={headerStyles.logo}>
            <img src={logoSVG} alt="Logo" />
        </div>
        <div className={headerStyles.switchers}>
            <div className={headerStyles.switcher}>
                <img src={lightSVG} alt="light_mode" />
            </div>
            <div className={headerStyles.separator}>
                <img src={separatorSVG} alt="separator" />
            </div>
            <div className={headerStyles.switcher}>
                <img src={darkSVG} alt="dark_mode" />
            </div>
        </div>
        <div className={headerStyles.navigation}>
            <div className={`${headerStyles.navItem} ${headerStyles.boldNavItem}`}>About</div>
            <div className={headerStyles.navItem}>Products</div>
        </div>
        <div className={headerStyles.icons}>
            <div className={headerStyles.cartIcon}>
                <img src={cartSVG} alt="Cart" />
            </div>
            <div className={headerStyles.burgerIcon}>
                <img src={burgerSVG} alt="Cart" />
            </div>
        </div>
        <button className={headerStyles.login}>
            <div className={headerStyles.content}>
                <img src={loginSVG} alt="Logo" />
                <div className={headerStyles.navItem}>Login</div>
            </div>
        </button>
        <button className={headerStyles.signUp}>
            <div className={headerStyles.content}>
                <img src={singUpSVG} alt="Sign up" />
                <div className={headerStyles.navItem}>Sign up</div>
            </div>
        </button>
    </div>
);
