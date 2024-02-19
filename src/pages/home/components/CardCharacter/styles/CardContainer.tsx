import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #3c3e44;
  display: flex;
  height: 200px;
  width: 500px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default CardContainer;
