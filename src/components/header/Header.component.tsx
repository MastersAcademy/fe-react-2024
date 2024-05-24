import React, { useContext } from 'react';
import { useState } from 'react';

import { PageType } from '../../App.tsx';
import activeDarkSVG from '../../assets/active_dark_mode.svg';
import activeLightSVG from '../../assets/active_light_mode.svg';
import burgerSVG from '../../assets/burger.svg';
import cartSVG from '../../assets/dark_theme_cart_icon.svg';
import loginSVG from '../../assets/login.svg';
import logoSVG from '../../assets/logo.svg';
import passiveDarkSVG from '../../assets/passive_dark_mode.svg';
import passiveLightSVG from '../../assets/passive_light_mode.svg';
import separatorSVG from '../../assets/separator.svg';
import singUpSVG from '../../assets/sign_up.svg';
import { ThemeContext } from '../ThemeProvider/ThemeProvider.component.tsx';

import headerStyles from './header.module.css';

interface NameComponentProps {
    setActivePage: (page: PageType) => void;
    totalCartCounter: number;
    activePage: PageType;
}

export const HeaderComponent: React.FC<NameComponentProps> = ({ setActivePage, totalCartCounter, activePage }) => {
    const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);
    const [activeButton, setActiveButton] = useState<PageType>(activePage);
    const handleButton = (name: PageType) => {
        setActivePage(name);
        setActiveButton(name);
        localStorage.setItem('activePage', name);
    };

    const handleBurgerMenu = (name: PageType) => {
        const localStoragePage = localStorage.getItem('activePage');
        const pageType = localStoragePage === PageType.PRODUCT_LIST ? PageType.PRODUCT_LIST : PageType.ABOUT_ME;
        activePage === PageType.MENU ? setActivePage(pageType) : setActivePage(name);
    };
    return (
        <div className={headerStyles.container}>
            <div className={headerStyles.logo}>
                <img src={logoSVG} alt="Logo" />
            </div>
            <div className={headerStyles.switchers}>
                <button onClick={setLightTheme} className={headerStyles.switcher}>
                    <img src={theme === 'light' ? activeLightSVG : passiveLightSVG} alt="light_mode" />
                </button>
                <div className={headerStyles.separator}>
                    <img src={separatorSVG} alt="separator" />
                </div>
                <button onClick={setDarkTheme} className={headerStyles.switcher}>
                    <img src={theme === 'dark' ? activeDarkSVG : passiveDarkSVG} alt="dark_mode" />
                </button>
            </div>
            <div className={headerStyles.navigation}>
                <button
                    onClick={() => handleButton(PageType.ABOUT_ME)}
                    className={`${headerStyles.navItem} ${activeButton === PageType.ABOUT_ME && headerStyles.boldNavItem} ${headerStyles.button}`}
                >
                    About
                </button>
                <button
                    onClick={() => handleButton(PageType.PRODUCT_LIST)}
                    className={`${headerStyles.navItem} ${activeButton === PageType.PRODUCT_LIST && headerStyles.boldNavItem} ${headerStyles.button}`}
                >
                    Products
                </button>
            </div>
            <div className={headerStyles.icons}>
                <div className={headerStyles.cartIcon}>
                    <img src={cartSVG} alt="Cart" />
                    {totalCartCounter > 0 ? <span className={headerStyles.cartCounter}>{totalCartCounter}</span> : ''}
                </div>
                <div onClick={() => handleBurgerMenu(PageType.MENU)} className={headerStyles.burgerIcon}>
                    <img src={burgerSVG} alt="Burger" />
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
};
