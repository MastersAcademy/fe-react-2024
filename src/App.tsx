import image from '@/assets/image.svg';

import './App.css';

function App() {
    return (
        <>
            <div className="container">
                <img src={image} className="img" />

                <div className="text">
                    <main className="home">
                        <h1>About me</h1>
                        <p>
                            Hi! My name is Andriy Voloshtchuk and I`m a Junior Frontend Developer. I am already familiar with main Web
                            Technologies like React, HTML, CSS, JavaScript and Git version control system.
                        </p>

                        <p>
                            This page was developed during the course
                            <a href="https://www.mastersacademy.education/frontend-for-beginners-it"> `Intro to React`</a> from Masters
                            Academy in 2024.
                        </p>

                        <p>
                            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                            create my own small project for the portfolio.
                        </p>

                        <p>
                            You can contact me via Telegram @Hyper22 and check out my{' '}
                            <a href=" https://github.com/PixelsPioneer ">GitHub </a>.
                        </p>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
