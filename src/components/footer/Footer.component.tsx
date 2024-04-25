import { IconsComponent } from '@/components/icons/Icons.component.tsx';

import footerStyles from './footer.module.css';

export const FooterComponent = () => (
    <div className={footerStyles.container}>
        <div className={footerStyles.divider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1148" height="2" viewBox="0 0 1148 2" fill="none">
                <path d="M0 1H1148" stroke="#CCCCCC" />
            </svg>
        </div>
        <>
            <IconsComponent />
        </>
        <h2 className={footerStyles.author}>
            Made with 💗 on course{' '}
            <a href="https://www.mastersacademy.education/frontend-for-beginners-it" className={footerStyles.redColor}>
                &apos;Intro to React&apos; from Masters Academy in 2024
            </a>{' '}
            by Serhii
        </h2>
    </div>
);
