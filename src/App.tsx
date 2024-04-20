import { About } from '@/components/about/About.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.mainContainer}>
            <HeaderComponent />
            <About />
        </div>
    );
}

export default App;
