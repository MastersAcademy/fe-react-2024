import { useState } from 'react';

import { About } from './components/about/About.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Header } from './components/header/Header.tsx';
import { Products } from './components/products/Products.tsx';

import './App.css';

function App() {
    const [linkState, setLinkState] = useState({
        about: true,
        products: false,
    });

    const onLinkPage = (link: string) => {
        setLinkState({
            ...linkState,
            [link]: true,
            [link === 'about' ? 'products' : 'about']: false,
        });
    };

    return (
        <>
            <header>
                <Header onLinkPage={onLinkPage} />
            </header>
            <main>{linkState.about ? <About /> : <Products />}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
