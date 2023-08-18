import { css, styled } from "styled-components";

const Wrapper = styled.div`
  ${(props) =>
    props.typeof === "global" &&
    css`
      padding: 3rem;
    `}

  ${(props) =>
    props.typeof === "local" &&
    css`
      padding: 1rem;
      border-bottom: 1px solid #000;
    `}
`;

export default Wrapper;
