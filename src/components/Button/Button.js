import styled from "styled-components";
import colors from "../../assets/styles/colors";

const Button = styled.button`
  width: ${({ wd }) => wd || "150px"};
  height: ${({ hg }) => hg || "40px"};
  background-color: ${colors.red};
  position: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius || "100px"};
  font-size: ${({ size }) => size};
  color: white;
  border: none;
  cursor: pointer;
`;

export default Button;
