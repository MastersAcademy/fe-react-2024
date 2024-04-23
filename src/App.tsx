import aboutImage from './assets/aboutImage.png';

import './App.css';

function App() {
    return (
        <>
            <main className="about-me">
                <img className="about-me-image" src={aboutImage} alt="About me" />
                <article className="about-me-text">
                    <h1 className="about-me-header">About me </h1>
                    <p className="about-me-paragraph">
                        Hi! My name is Vladyslav Brusentsov and I`m a Junior Frontend Developer. I&apos;m already familiar with main Web
                        Technologies like React, HTML, CSS, JavaScript and Git version control system.
                        <br />
                        <br />
                        This page was developed during the course &lsquo;
                        <a href="https://www.mastersacademy.education/frontend-for-beginners-it"> Intro to React </a> &rsquo; from Masters
                        Academy in 2024.
                        <br />
                        <br />
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                        <br />
                        <br />
                        You can contact me via Telegram: @Arconiel and check out my <a href="https://github.com/vBrusentsov">GitHub.</a>
                    </p>
                </article>
            </main>
        </>
    );
}

export default App;
