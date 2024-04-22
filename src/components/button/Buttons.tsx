interface ButtonProps {
    className: string;
    children: React.ReactNode;
}

const Button = ({ className, children }: ButtonProps) => <button className={className}>{children}</button>;

export default Button;
