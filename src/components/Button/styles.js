import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

const ButtonWrapper = styled.button`
  width: ${({ width }) => width || "150px"};
  height: ${({ height }) => height || "40px"};
  background: ${COLORS.red};
  border-radius: ${({ borderRadius }) => borderRadius || "100px"};
  font-size: ${({ size }) => size};

  color: white;
  border: none;
  cursor: pointer;
`;

export default ButtonWrapper;
