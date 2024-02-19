import React from "react";
import { FieldValues } from "react-hook-form";
import Select from "react-select";
import { Text } from "../designSystem";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  field: FieldValues;
  options: Option[];
  width?: string;
  text: string;
}

const Container = styled.div`
  text-align: left;
`;

const Dropdown: React.FC<DropdownProps> = ({
  field,
  options,
  text,
  width = "200px",
}) => {
  return (
    <Container style={{ width: width }}>
      <Text mt={10} mb={3} size="1rem" bold>
        {text}
      </Text>
      <Select {...field} options={options} />
    </Container>
  );
};

export default Dropdown;
