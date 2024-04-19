import aboutImg from '@/assets/aboutImg.png';

import './about.css';

export const AboutComponent = () => (
    <section className="about">
        <div className="about__descr">
            <h1 className="about__descr-title">About Me</h1>
            <p className="about__descr-text">
                Hi! My name is Artem Sokur and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                React, HTML, CSS, JavaScript and Git version control system.
            </p>
            <p className="about__descr-text">
                This page was developed during the course{' '}
                <a className="intro" href="https://www.mastersacademy.education/frontend-react-it" target="_blank" rel="noreferrer">
                    &apos;Intro to React&apos;
                </a>{' '}
                from Masters Academy in 2024.
            </p>
            <p className="about__descr-text">
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
            </p>
            <p className="about__descr-text">
                You can contact me via{' '}
                <a target="_blank" rel="noreferrer" href="https://t.me/Grim_679" className="link">
                    telegram
                </a>{' '}
                and check out my{' '}
                <a target="_blank" rel="noreferrer" href="https://github.com/Grimdvl" className="link">
                    GitHub
                </a>
                .
            </p>
        </div>
        <div className="about__logo">
            <img className="about__logo-img" src={aboutImg} alt="Artem Sokur" />
        </div>
    </section>
);
