import styled from "styled-components";

const RightContainer = styled.div`
  margin: 10px;
  margin-right: 0;
  padding: 10px;
  padding-right: 0;
  width: 267px;
  min-width: 200px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: block;
    padding-right: 20px;
  }
`;

export default RightContainer;
