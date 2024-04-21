import { About } from '@/components/about/About.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.mainContainer}>
            <About />
        </div>
    );
}

export default App;
