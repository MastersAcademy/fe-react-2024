import aboutImg from '@/assets/aboutImg.png';

import Link from '../link/Link.tsx';

import './about.css';

export const About = () => (
    <section className="about">
        <div className="about__descr">
            <h1 className="about__descr-title">About Me</h1>
            <p className="about__descr-text">
                Hi! My name is Artem Sokur and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                React, HTML, CSS, JavaScript and Git version control system.
            </p>
            <p className="about__descr-text">
                This page was developed during the course{' '}
                <Link href="https://www.mastersacademy.education/frontend-react-it" className="intro">
                    &apos;Intro to React&apos;
                </Link>{' '}
                from Masters Academy in 2024.
            </p>
            <p className="about__descr-text">
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
            </p>
            <p className="about__descr-text">
                You can contact me via{' '}
                <Link href="https://t.me/Grim_679" className="link">
                    telegram
                </Link>{' '}
                and check out my{' '}
                <Link href="https://github.com/Grimdvl" className="link">
                    GitHub
                </Link>
                .
            </p>
        </div>
        <div className="about__logo">
            <img className="about__logo-img" src={aboutImg} alt="orange stairs" />
        </div>
    </section>
);
