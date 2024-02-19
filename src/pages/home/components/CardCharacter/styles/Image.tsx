import styled from "styled-components";

const Image = styled.img`
  border-radius: 10px 0 0 10px;
  width: 200px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export default Image;
