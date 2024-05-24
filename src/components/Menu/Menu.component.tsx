import React, { useContext } from 'react';

import { PageType } from '../../App.tsx';
import darkMoon from '../../assets/darkMoon.png';
import darkSun from '../../assets/darkSun.png';
import lightMoon from '../../assets/lightMoon.png';
import lightSun from '../../assets/lightSun.png';
import separatorSVG from '../../assets/separator.svg';
import { ThemeContext } from '../ThemeProvider/ThemeProvider.component.tsx';

import styles from './Menu.module.css';

interface NameComponentProps {
    setActivePage: (page: PageType) => void;
}

export const MenuComponent: React.FC<NameComponentProps> = ({ setActivePage }) => {
    const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);
    const handleButton = (name: PageType) => {
        setActivePage(name);
        localStorage.setItem('activePage', name);
    };
    const activePage = localStorage.getItem('activePage');

    const lightModeIcon = () => (theme === 'light' ? lightSun : darkSun);

    const darkModeIcon = () => (theme === 'light' ? lightMoon : darkMoon);
    return (
        <div className={styles.container}>
            <button
                onClick={() => handleButton(PageType.ABOUT_ME)}
                className={`${activePage === PageType.ABOUT_ME && styles.boldNavItem} ${styles.button}`}
            >
                About
            </button>
            <button
                onClick={() => handleButton(PageType.PRODUCT_LIST)}
                className={`${activePage === PageType.PRODUCT_LIST && styles.boldNavItem} ${styles.button}`}
            >
                Products
            </button>
            <button className={styles.button}>Login</button>
            <button className={styles.button}>Sign Up</button>
            <div className={styles.switchers}>
                <button onClick={setLightTheme}>
                    <img src={lightModeIcon()} alt="light_mode" />
                </button>
                <div className={styles.separator}>
                    <img src={separatorSVG} alt="separator" />
                </div>
                <button onClick={setDarkTheme}>
                    <img src={darkModeIcon()} alt="dark_mode" />
                </button>
            </div>
        </div>
    );
};
