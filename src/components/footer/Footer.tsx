import Link from '../link/Link.tsx';

import './footer.css';

export const Footer = () => (
    <section className="foot">
        <div className="foot__social">
            <Link href="https://www.facebook.com/cherkasy.masters" className="foot__social-media">
                <i className="social__media-facebook bx bxl-facebook"></i>
            </Link>
            <Link href="https://www.linkedin.com/company/masters-academy-educational-project" className="foot__social-media">
                <i className="social__media-linkedin bx bxl-linkedin"></i>
            </Link>
            <Link href="https://www.instagram.com/masters_academy__/" className="foot__social-media">
                <i className="social__media-instagram bx bxl-instagram-alt"></i>
            </Link>
        </div>

        <div className="foot__subscription">
            Made with 💗 on course
            <Link href="https://www.mastersacademy.education/frontend-react-it" className="foot__subscription-link">
                {' '}
                &apos;Intro to React&apos; from Masters Academy in 2024
            </Link>
            , by{' '}
            <Link href="https://www.instagram.com/artemsokur69" className="foot__subscription-link">
                Artem Sokur
            </Link>
        </div>
    </section>
);
