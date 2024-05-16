import aboutImg from '@/assets/about.jpg';
import { linkedinProfile } from '@/links.tsx';

import './About.css';
import '@/reset.css';

export const About = () => (
    <>
        <main className="main__block">
            <div className="main__row content">
                <section className="about__block">
                    <h2 className="about__title">About me</h2>
                    <div>
                        <p className="about__text">
                            Hi! My name is Bogdan and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                            like React, HTML, CSS, JavaScript and Git version control system.
                        </p>
                        <p className="about__text">
                            This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                        </p>
                        <p className="about__text">
                            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                            create my own small project for the portfolio.
                        </p>
                        <p className="about__text">
                            You can contact me via &apos;
                            <a href={linkedinProfile} className="about__link">
                                LinkedIn profile
                            </a>
                            &apos; and check out my GitHub.
                        </p>
                    </div>
                </section>
                <img src={aboutImg} alt="About img" className="about__img" />
            </div>
        </main>
    </>
);

export default About;
