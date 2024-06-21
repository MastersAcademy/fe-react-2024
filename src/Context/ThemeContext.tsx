import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme as Theme;
        } else {
            const isDarkModePreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return isDarkModePreferred ? Theme.DARK : Theme.LIGHT;
        }
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
export { ThemeProvider, useTheme };
