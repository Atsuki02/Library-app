import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: black;
  outline: none;
  border: 2px solid linear-gradient(to left, #f2f2f0, #d2cfd4);
  border-radius: 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(right, #fafaec, #256db9);
  background: linear-gradient(to left, #f4f4f6, #001200);
  background-color: #f2f2f0;
  border-color: #d2cfd4;
  color: black;

  &:hover {
    background: -webkit-linear-gradient(right, #256db9, #fafaec);
    background: linear-gradient(to left, #001200, #f4f4f6);
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.typeof === "large" &&
    css`
      height: 20px;
      padding: 3rem 4rem;
      font-size: 20px;
      font-weight: 600;
    `}

  ${(props) =>
    props.typeof === "small" &&
    css`
      height: 15px;
      padding: 2rem 4rem;
      font-size: 14px;
      font-weight: 400;
    `}
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  type: string;
};

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} typeof={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
