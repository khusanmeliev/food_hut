import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: ${({ width }) => width || "150px"};
  height: ${({ height }) => height || "40px"};
  background: ${({ theme }) => theme.background};
  border-radius: ${({ borderRadius }) => borderRadius || "100px"};
  font-size: ${({ size }) => size};
  color: white;
  border: none;
  cursor: pointer;
`;

export default ButtonWrapper;
