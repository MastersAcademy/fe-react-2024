import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './components/about/About.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <About />
    </React.StrictMode>,
);
