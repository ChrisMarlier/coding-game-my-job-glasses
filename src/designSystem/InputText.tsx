import React from "react";
import { FieldValues } from "react-hook-form";
import { Text } from "../designSystem";
import styled from "styled-components";

type InputTextProps = {
  color?: "lightBlue";
  field: FieldValues;
  text: string;
};

const Container = styled.div`
  text-align: left;
`;

const InputText: React.FC<InputTextProps> = ({
  color = "lightBlue",
  field,
  text,
}) => {
  const colorFormater = {
    lightBlue: "#237fb7",
  };

  const inputStyle: React.CSSProperties = {
    border: `1px solid ${colorFormater[color]}`,
    borderRadius: "5px",
    padding: "10px",
    width: "100%",
  };

  return (
    <Container>
      <Text mt={10} mb={3} size="1rem" bold>
        {text}
      </Text>
      <input type="text" style={inputStyle} {...field} />
    </Container>
  );
};

export default InputText;
