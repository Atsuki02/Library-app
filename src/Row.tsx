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
`;

Row.defaultProps = {
  typeof: "horizontal",
};

export default Row;
