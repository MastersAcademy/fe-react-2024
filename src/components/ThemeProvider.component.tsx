import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    setLightTheme: () => {},
    setDarkTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const setLightTheme = () => {
        setTheme('light');
    };

    const setDarkTheme = () => {
        setTheme('dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
            <div className={`${theme}_theme`}>{children}</div>
        </ThemeContext.Provider>
    );
};
