import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 90%;
  height: 40px;
  font-family: ${(props) => props.theme.text.primaryStyle};
  font-size: ${(props) => props.theme.text.primarySize};
  background: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  cursor: pointer;

  :disabled {
    opacity: 57%;
  }

  @media (min-width: 900px) {
    height: 57px;
  }
`;

export default ButtonStyled;
