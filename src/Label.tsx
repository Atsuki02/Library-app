import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 2rem auto;
  font-size: 2rem;
  font-weight: bold;
  width: max-content;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default Label;
