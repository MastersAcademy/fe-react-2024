import facebook from '@/assets/fb.svg';
import instagram from '@/assets/instagram.svg';
import linkedin from '@/assets/linkedin.svg';

import { WidthContainer } from '../width-container';

import styles from './footer.module.css';

export const Footer = () => (
    <footer>
        <WidthContainer>
            <div className={styles['footer__inner']}>
                <div className={styles['footer__social-media']}>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={facebook} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={linkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/serhiishev/" target="blank">
                                <img src={instagram} />
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Made with 💗 on course&nbsp;
                    <a href="https://www.mastersacademy.education/frontend-react-it" target="blank">
                        &apos;Intro to React&apos; from Masters Academy in 2024
                    </a>
                    &nbsp; by Serhii Shevchenko
                </p>
            </div>
        </WidthContainer>
    </footer>
);
