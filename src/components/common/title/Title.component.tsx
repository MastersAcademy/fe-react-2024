import React from 'react';

import type TitleComponentProps from '@/interfaces/TitleComponentProps.ts';

export const TitleComponent: React.FC<TitleComponentProps> = ({ children, titleClasses }) => <h2 className={titleClasses}>{children}</h2>;
