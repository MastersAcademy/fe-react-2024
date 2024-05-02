import { IconsComponent } from '@/components/icons/Icons.component.tsx';

import footerStyles from './footer.module.css';

export const FooterComponent = () => (
    <div className={footerStyles.container}>
        <IconsComponent />
        <h2 className={footerStyles.description}>
            Made with 💗 on course{' '}
            <a href="https://www.mastersacademy.education/frontend-for-beginners-it" className={footerStyles.link}>
                &apos;Intro to React&apos; from Masters Academy in 2024
            </a>{' '}
            by Serhii
        </h2>
    </div>
);
