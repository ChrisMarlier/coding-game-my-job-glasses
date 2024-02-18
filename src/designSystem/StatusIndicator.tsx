import styled from "styled-components";
import Text from "./Text";

const Container = styled.div`
  width: 80px;
  padding: 5px;
  text-align: center;
  border-radius: 20px;
  float: right;
`;

interface Props {
  variant: "Alive" | "Dead" | "unknown";
  text: string;
}

const StatusIndicator: React.FC<Props> = ({ text, variant }) => {
  const backgroundFormater = {
    Alive: "#4caf50",
    Dead: "#f44336",
    unknown: "#9e9e9e",
  };

  return (
    <Container style={{ backgroundColor: backgroundFormater[variant] }}>
      <Text size="0.9rem" bold>
        {text}
      </Text>
    </Container>
  );
};

export default StatusIndicator;
