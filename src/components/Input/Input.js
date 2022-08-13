import styled from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => width || "200px"};
  height: ${({ height }) => height || "35px"};
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius || "100px"};
  border: ${({ border }) => border || "none"};
  text-indent: 10px;
  margin-top: ${({ margintTop }) => margintTop};
`;
