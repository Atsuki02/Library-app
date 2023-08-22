import { css, styled } from "styled-components";

const Wrapper = styled.div`
  ${(props) =>
    props.typeof === "global" &&
    css`
      padding: 0.6rem;
    `}

  ${(props) =>
    props.typeof === "local" &&
    css`
      padding: 4rem;
      width: 40%;
      border-radius: 1rem;
      background-color: #7b7dfa;
      box-shadow: 10px 10px 10px rgba(143, 168, 243, 0.296);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      @media (max-width: 768px) {
        padding: 4rem 2rem;
        width: 100%;
        font-size: 1.4rem;
        font-weight: 600;
        gap: 2rem;
        margin: 1rem;
      }
    `}
`;

export default Wrapper;
