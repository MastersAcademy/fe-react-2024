import React from 'react';

import type ImageComponentProps from '@/interfaces/ImageComponentProps.ts';

export const ImageComponent: React.FC<ImageComponentProps> = ({ imgSrc, imgAlt, imgWrapClasses, imgClasses }) => (
    <div className={imgWrapClasses}>
        <img className={imgClasses} src={imgSrc} alt={imgAlt} />
    </div>
);
