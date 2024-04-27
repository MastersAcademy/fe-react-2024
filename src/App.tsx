import { About } from '@/components/about/About.component.tsx';
import { Footer } from '@/components/footer/Footer.component.tsx';
import { Header } from '@/components/header/Header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <About />
            <Footer />
        </div>
    );
}

export default App;
