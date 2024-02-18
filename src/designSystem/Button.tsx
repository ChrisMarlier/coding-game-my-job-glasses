import React from "react";

interface ButtonProps {
  color?: "lightBlue";
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  margin?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "lightBlue",
  size = "medium",
  margin = "0",
  onClick,
}) => {
  const sizeFormater = {
    small: "12px",
    medium: "14px",
    large: "16px",
  };

  const colorFormater = {
    lightBlue: "#237fb7",
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: colorFormater[color],
    padding: sizeFormater[size],
    fontSize: sizeFormater[size],
    margin: margin,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
    outline: "none",
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
