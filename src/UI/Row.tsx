import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;
  width: 100%;

  ${(props) =>
    props.typeof === "horizontal" &&
    css`
      justify-content: flex-start;
      align-items: center;
    `}
  ${(props) =>
    props.typeof === "vertical" &&
    css`
      flex-direction: column;
      align-items: center;
    `}

    ${(props) =>
    props.typeof === "mobile" &&
    css`
      justify-content: flex-start;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
      }
    `}
`;

Row.defaultProps = {
  typeof: "horizontal",
};

export default Row;
