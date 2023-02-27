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

  @media (min-width: 900px) {
    opacity: 57%;
    height: 57px;
    width: 320px;
  }
`;

export default ButtonStyled;
