import { ReactNode } from "react";

interface Props {
  bold?: boolean;
  children: ReactNode;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  size?: string;
  color?: "white" | "black";
}

const Text: React.FC<Props> = ({
  bold,
  color = "black",
  mb = 0,
  ml = 0,
  mr = 0,
  mt = 0,
  children,
  size = "1.1em",
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontSize: size,
    fontWeight: bold ? "bold" : "normal",
    margin: `${mt}px ${mr}px ${mb}px ${ml}px`,
  };

  return <p style={styles}>{children}</p>;
};

export default Text;
