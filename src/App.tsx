import image from '@/assets/image.png';

import './App.css';

function App() {
    return (
        <>
            <div className="container">
                <img src={image} alt=" Orange stairs to the top " className="img" />
                <div className="text">
                    <main className="home">
                        <span>About me</span>
                        <br />
                        <br />
                        <br />
                        <p>
                            Hi! My name is Andriy Voloshtchuk and I`m a Junior Frontend Developer. I am already familiar with main Web
                            Technologies like React, HTML, CSS, JavaScript and Git version control system.
                            <br />
                            <br />
                            This page was developed during the course
                            <a href="https://www.mastersacademy.education/frontend-for-beginners-it"> `Intro to React`</a> from Masters
                            Academy in 2024.
                            <br />
                            <br />
                            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                            create my own small project for the portfolio.
                            <br />
                            <br />
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
