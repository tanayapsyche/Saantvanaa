import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary: "bg-accent text-white hover:bg-dark",
  secondary: "bg-warm-bg text-dark border border-dark/15 hover:bg-white",
  outline: "border-2 border-dark text-dark hover:bg-dark/10",
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
