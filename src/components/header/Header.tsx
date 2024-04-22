import maLogo from '@/assets/ma.svg';

import Link from '../link/Link.tsx';

import './header.css';

export const Header = () => (
    <section className="head">
        <div className="head__logo">
            <Link href="https://www.mastersacademy.education/" className="head__logo-ma">
                <img src={maLogo} alt="Masters Academy logo" className="head__logo-ma--link" />
            </Link>
        </div>

        <div className="head__theme">
            <Link href="#" className="head__theme--sun active">
                <i className="bx bx-sun"></i>
            </Link>
            <Link href="#" className="head__theme--moon">
                <i className="bx bx-moon"></i>
            </Link>
        </div>

        <div className="head__navigation">
            <Link href="#" className="head__navigation--about active">
                About
            </Link>
            <Link href="#" className="head__navigation--products">
                Products
            </Link>
        </div>

        <div className="head__cart">
            <Link href="#" className="head__cart--button">
                <i className="bx bx-cart"></i>
            </Link>
        </div>

        <div className="head__registration">
            <Link href="#" className="head__registration--log">
                <i className="bx bx-log-in"></i>
                Login
            </Link>
            <Link href="#" className="head__registration--sign">
                <i className="bx bx-user-plus"></i>
                Sign up
            </Link>
        </div>

        <div className="head--humburger"></div>
    </section>
);
