import styled from "styled-components";
import mobile from "../../assets/styles/size";

export const Input = styled.input`
  width: ${({ wd }) => wd || "200px"};
  height: ${({ hg }) => hg || "35px"};
  outline: none;
  border-radius: 100px;
  border: ${({ border }) => border || "none"};
  text-indent: 10px;
  margin-top: ${({ margintTop }) => margintTop};
`;
