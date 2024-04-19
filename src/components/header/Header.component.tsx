import maLogo from '@/assets/ma.svg';

import './header.css';

export const HeaderComponent = () => (
    <section className="head">
        <div className="head__logo">
            <a href="https://www.mastersacademy.education/" target="_blank" rel="noreferrer" className="head__logo-ma">
                <img src={maLogo} alt="Masters Academy" className="head__logo-ma--link" />
            </a>
        </div>

        <div className="head__theme">
            <button className="head__theme--sun active">
                <i className="bx bx-sun"></i>
            </button>
            <button className="head__theme--moon">
                <i className="bx bx-moon"></i>
            </button>
        </div>

        <div className="head__navigation">
            <button className="head__navigation--about active">About</button>
            <button className="head__navigation--products">Products</button>
        </div>

        <div className="head__cart">
            <button className="head__cart--button">
                <i className="bx bx-cart"></i>
            </button>
        </div>

        <div className="head__registration">
            <button className="head__registration--log">
                <i className="bx bx-log-in"></i>
                Login
            </button>
            <button className="head__registration--sign">
                <i className="bx bx-user-plus"></i>
                Sign up
            </button>
        </div>
    </section>
);
