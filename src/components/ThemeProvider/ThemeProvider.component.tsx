import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

import styles from './ThemeProvider.module.css';

export const ThemeContext = createContext({
    theme: 'light',
    setLightTheme: () => {},
    setDarkTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const activeTheme = () => {
        const localStorageTheme = localStorage.getItem('theme');
        const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return localStorageTheme ?? deviceTheme;
    };
    const [theme, setTheme] = useState(activeTheme);

    const setLightTheme = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    };

    const setDarkTheme = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
            <div className={`${theme}_theme ${styles.themeContainer}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
