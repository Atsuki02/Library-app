import styled from "styled-components";
import Heading from "./Heading";

const StyledHeader = styled.main`
  height: 60px;
  background-color: var(--primary-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as="h1">Build your own computer</Heading>
    </StyledHeader>
  );
}

export default Header;
