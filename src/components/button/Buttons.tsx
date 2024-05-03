interface ButtonProps {
    className: string;
    children: React.ReactNode;
}

const Buttons = ({ className, children }: ButtonProps) => <button className={className}>{children}</button>;

export default Buttons;
