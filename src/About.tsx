import './About.css';

function App() {
    const name = 'Lesia';

    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="about ">
                        <h1 className="about__title mt-60">About me</h1>
                        <p className="about__text mt-60">
                            Hi! My name is {name} and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                            like React, HTML, CSS, JavaScript and Git version control system.
                        </p>
                        <p className="about__text mt-30">
                            {' '}
                            This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                        </p>
                        <p className="about__text mt-30">
                            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                            create my own small project for the portfolio.
                        </p>
                        <p className="about__text mt-30">You can contact me via [social network name] and check out my GitHub.</p>
                    </div>
                    <div className="image"></div>
                </div>
            </main>
        </>
    );
}

export default App;
