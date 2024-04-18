import aboutImage from '@/assets/about-image.png';

import { Title } from '../../components/title';
import { WidthContainer } from '../../components/width-container';

import styles from './about-page.module.css';

export const AboutPage = () => (
    <section className={styles.about}>
        <WidthContainer>
            <Title />
            <div className={styles['about__inner']}>
                <div className={styles['about__inner-text']}>
                    <p>
                        Hi! My name is Serhii and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p>
                        This page was developed during the course &apos;
                        <a href="https://www.mastersacademy.education/frontend-react-it" target="blank">
                            Intro to React
                        </a>
                        &apos; from Masters Academy in 2024.
                    </p>
                    <p>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p>
                        You can contact me via&nbsp;
                        <a href="https://t.me/greyzerua" target="blank">
                            telegram
                        </a>
                        &nbsp;and check out my&nbsp;
                        <a href="https://github.com/greyzerua" target="blank">
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className={styles['about__inner-image']}>
                    <img src={aboutImage} />
                </div>
            </div>
        </WidthContainer>
    </section>
);
