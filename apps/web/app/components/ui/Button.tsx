import { forwardRef } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary/50",
      secondary: "bg-secondary text-primary hover:bg-secondary/80 hover:shadow-md focus:ring-secondary/50",
      outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-md focus:ring-primary/50",
      ghost: "text-primary hover:bg-primary/10 focus:ring-primary/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };