import styled from "styled-components";

const StyledButton = styled.button`
  height: 20px;
  border-radius: 0.5rem;
  background-color: var(--main-color);
  color: white;
  outline: none;
  border: none;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Button() {
  return <StyledButton>Add your PC</StyledButton>;
}

export default Button;
