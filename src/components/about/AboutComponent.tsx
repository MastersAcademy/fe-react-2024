import aboutImg from '@/assets/about.png';

import AboutCSS from './about.module.css';

export const AboutComponent = () => (
    <div className={AboutCSS.container}>
        <img className={AboutCSS.img} src={aboutImg} alt="AboutIMG" />
        <div className={AboutCSS.text}>
            <h1 className={AboutCSS.title}>About me</h1>
            <p className={AboutCSS.description}>
                Hi! My name is Oleh, and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
                HTML, CSS, JavaScript and Git version control system. <br /> <br />
                This page was developed during the course &apos;
                <a href="https://www.mastersacademy.education/frontend-react-it">Intro to React</a>&apos; from Masters Academy in 2024.{' '}
                <br /> <br />
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio. <br /> <br />
                You can contact me via <a href="https://t.me/medushivskyi">Telegram</a> and check out my{' '}
                <a href="https://github.com/legogoUA">GitHub</a>.
            </p>
        </div>
    </div>
);
