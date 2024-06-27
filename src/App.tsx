import Router from '@/components/Router/Router.component';
import { useTheme } from '@/Context/ThemeContext';

import styles from './App.module.css';

function App() {
    const { theme } = useTheme();

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Router />
            </div>
        </>
    );
}

export default App;
