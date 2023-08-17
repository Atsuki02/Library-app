import styled from "styled-components";

const StyledHeader = styled.main`
  height: 60px;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const H1 = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

function Header() {
  return (
    <StyledHeader>
      <H1>Build your own computer</H1>
    </StyledHeader>
  );
}

export default Header;
