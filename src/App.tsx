import { About } from './components/about/About.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Header } from './components/header/Header.tsx';

import './App.css';

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <About />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
