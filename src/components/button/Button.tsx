import React from 'react';

export const Button = ({ className, children, ...rest }: React.ComponentProps<'button'>) => (
    <button className={className} {...rest}>
        {children}
    </button>
);
