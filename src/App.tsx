import { AboutComponent } from './components/about/About.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <header className="header">
                <HeaderComponent />
            </header>
            <main className="main">
                <AboutComponent />
            </main>
        </>
    );
}

export default App;
