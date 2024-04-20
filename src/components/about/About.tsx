import aboutImg from '@/assets/about.jpg';

import { HeaderComponent } from '../header/Header.component.tsx';

import './About.css';
import '../../reset.css';

function About() {
    return (
        <>
            <HeaderComponent />
            <main className="main__block">
                <div className="main__row content">
                    <div className="about__block">
                        <h2 className="about__title">About</h2>
                        <div>
                            <p className="about__text">
                                Hi! My name is Bogdan and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                                Technologies like React, HTML, CSS, JavaScript and Git version control system.
                            </p>
                            <p className="about__text">
                                This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                            </p>
                            <p className="about__text">
                                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                                create my own small project for the portfolio.
                            </p>
                            <p className="about__text">
                                You can contact me via
                                <a
                                    href="https://www.linkedin.com/in/%D0%B1%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD-%D1%8F%D1%86%D0%B5%D0%BD%D1%82%D1%8E%D0%BA-841247270/"
                                    className="about__link"
                                >
                                    LinkedIn profile
                                </a>{' '}
                                and check out my GitHub.
                            </p>
                        </div>
                    </div>
                    <img src={aboutImg} alt="About img" className="about__img" />
                </div>
            </main>
        </>
    );
}

export default About;
