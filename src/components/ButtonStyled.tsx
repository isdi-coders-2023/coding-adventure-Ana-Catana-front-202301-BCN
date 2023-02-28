import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  width: 323px;
  height: 40px;
  font-family: "Saira Stencil One";
  font-size: 1.25rem;
  background: #cccf18;
  border-radius: 10px;
  cursor: pointer;

  &disabled {
    opacity: 57%;
  }

  @media (min-width: 900px) {
    height: 57px;
  }
`;

export default ButtonStyled;
