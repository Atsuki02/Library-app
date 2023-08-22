import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: var(--primary-text-color);
      font-size: 4rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--primary-text-color);
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      color: var(--primary-text-color);
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
