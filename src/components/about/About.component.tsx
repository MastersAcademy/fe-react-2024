import about from '@/assets/about/index.png';
import { AboutDescriptionComponent } from '@/components/about/description/AboutDescription.component.tsx';
import { ImageComponent } from '@/components/common/image/Image.component.tsx';

import styles from './About.module.css';

export const AboutComponent = () => {
    const imgAlt = 'About logo';

    return (
        <section className={styles.wrapper}>
            <AboutDescriptionComponent />
            <div className={styles.imageMainWrap}>
                <ImageComponent imgSrc={about} imgAlt={imgAlt} imgWrapClasses={styles.imageWrap} imgClasses={styles.img} />
            </div>
        </section>
    );
};
