import { AboutComponent } from './components/about/About.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ImageComponent } from './components/image/Image.component.tsx';

import './App.css';

function App() {
    return (
        <main className="home">
            <HeaderComponent />
            <section>
                <div className="wrapper">
                    <AboutComponent customClasses="w-6 w-12 offset-right-xs offset-mobile-none" />
                    <ImageComponent customClasses="w-6 w-12 padding-120 padding-mobile-none" />
                </div>
            </section>
        </main>
    );
}

export default App;
