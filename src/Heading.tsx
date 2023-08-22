import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: var(--primary-text-color);
      font-size: 4rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
        font-weight: 600;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--primary-text-color);
      font-size: 3rem;
      font-weight: 600;
      @media (max-width: 768px) {
        font-size: 2.4rem;
        font-weight: 600;
      }
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      color: #04234a;
      font-size: 2rem;
      font-weight: 600;
      padding-right: 25px;
      font-style: italic;
      @media (max-width: 768px) {
        font-size: 1.4rem;
        padding-right: 5px;
      }
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      color: var(--primary-text-color);
      font-size: 1.4rem;
      font-weight: 400;
      padding-right: 10px;
      @media (max-width: 768px) {
        font-size: 1.2rem;
        padding-right: 5px;
        margin: 0.4rem;
      }
    `}
`;

export default Heading;
