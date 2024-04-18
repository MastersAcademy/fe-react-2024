import { AboutComponent } from './components/about/About.component.tsx';

import styles from './App.module.css';

export default function App() {
    return (
        <>
            <main className={styles.main}>
                <AboutComponent />
            </main>
        </>
    );
}
