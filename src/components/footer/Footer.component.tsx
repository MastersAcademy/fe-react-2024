import './footer.css';

export const FooterComponent = () => (
    <section className="foot">
        <div className="foot__social">
            <a className="foot__social-media" href="https://www.facebook.com/cherkasy.masters" target="_blank" rel="noreferrer">
                <i className="social__media-facebook bx bxl-facebook"></i>
            </a>
            <a
                className="foot__social-media"
                href="https://www.linkedin.com/company/masters-academy-educational-project"
                target="_blank"
                rel="noreferrer"
            >
                <i className="social__media-linkedin bx bxl-linkedin"></i>
            </a>
            <a className="foot__social-media" href="https://www.instagram.com/masters_academy__/" target="_blank" rel="noreferrer">
                <i className="social__media-instagram bx bxl-instagram-alt"></i>
            </a>
        </div>

        <div className="foot__subscription">
            Made with 💗 on course
            <a
                className="foot__subscription-link"
                href="https://www.mastersacademy.education/frontend-react-it"
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                &apos;Intro to React&apos; from Masters Academy in 2024
            </a>
            , by
            <a className="foot__subscription-link" href="https://www.instagram.com/artemsokur69">
                Artem Sokur
            </a>
        </div>
    </section>
);
