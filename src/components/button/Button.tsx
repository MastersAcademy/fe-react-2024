import React from 'react';

interface ButtonGroup extends React.HTMLAttributes<HTMLButtonElement> {}
export const Button: React.ComponentType<ButtonGroup> = ({ className, children, ...rest }) => (
    <button className={className} {...rest}>
        {children}
    </button>
);
