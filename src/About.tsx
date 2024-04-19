import imgAbout from '@/assets/img-about.jpg';

import './About.css';

function App() {
    return (
        <>
            <main className="main">
                <div className="about mt-60">
                    <h1 className="about__title">About me</h1>
                    <p className="about__text pt-60">
                        Hi! My name is [Name] and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className="about__text">
                        {' '}
                        This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                    </p>
                    <p className="about__text">
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className="about__text">You can contact me via [social network name] and check out my GitHub.</p>
                </div>
                <div className="image">
                    <img className="image-src" src={imgAbout} alt="React logo" />
                </div>
            </main>
        </>
    );
}

export default App;
