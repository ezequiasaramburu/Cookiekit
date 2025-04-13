import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-all shadow-md hover:shadow-lg";

  const variantStyles = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-amber-600 text-amber-600 hover:bg-amber-50",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
