import reactLogo from '@/assets/react.svg';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <h1>
                    <img src={reactLogo} alt="React logo" />
                    Home page
                </h1>
            </main>
        </>
    );
}

export default App;
