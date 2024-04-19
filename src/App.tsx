import { About } from './components/About/About.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Header } from './components/header/Header.tsx';

import './App.css';

function App() {
    return (
        <>
            <Header />
            <About />
            <Footer />
        </>
    );
}

export default App;
