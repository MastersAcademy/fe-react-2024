import ProductList from '@/Models/ProductList';

import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <>
            <Header />
            <main className={styles.body}>
                {/* <AboutPage />*/}
                <ProductList />
            </main>
            <Footer />
        </>
    );
}

export default App;
