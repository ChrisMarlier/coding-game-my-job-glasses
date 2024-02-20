import { ReactNode } from "react";

interface Props {
  bold?: boolean;
  children: ReactNode;
  onClick?: () => void;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  size?: string;
  color?: "black" | "lightblue" | "white";
}

const Text: React.FC<Props> = ({
  bold,
  color = "black",
  onClick,
  mb = 0,
  ml = 0,
  mr = 0,
  mt = 0,
  children,
  size = "1.1em",
}) => {
  const colorFormater = {
    black: "#000",
    lightblue: "#237fb7",
    white: "#fff",
  };

  const styles: React.CSSProperties = {
    color: colorFormater[color],
    fontSize: size,
    fontWeight: bold ? "bold" : "normal",
    margin: `${mt}px ${mr}px ${mb}px ${ml}px`,
  };

  return (
    <p onClick={onClick} style={styles}>
      {children}
    </p>
  );
};

export default Text;
