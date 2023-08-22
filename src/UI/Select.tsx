import styled from "styled-components";

const Select = styled.select`
  padding: 0.8rem 1.4rem;
  margin-left: 30px;
  border: 1px solid #5c6ac4;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  width: 250px;
  background-color: white;
  color: #333;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: #d2cfd4 3px solid;
    border-color: #5c6ac4;
    box-shadow: 0 0 3px #1f2e8c;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.4rem;
    width: 200px;
  }
`;

export default Select;
