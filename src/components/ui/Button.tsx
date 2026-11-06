import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary: "bg-accent-dark text-white hover:bg-earth shadow-sm",
  secondary: "bg-secondary text-earth-deep hover:bg-secondary-light",
  outline: "border-2 border-earth text-earth hover:bg-earth hover:text-light",
  dark: "bg-earth-deep text-light hover:bg-earth",
  light: "bg-light text-earth-deep hover:bg-secondary-light",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({ href, variant = "primary", size = "md", children, className = "", type = "button", onClick }: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
