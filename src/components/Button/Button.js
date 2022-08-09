import styled from "styled-components";
import colors from "../../assets/styles/colors";

const Button = styled.button`
  width: ${({ wd }) => wd || "135px"};
  height: ${({ hg }) => hg || "40px"};
  background-color: ${colors.button};
  position: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius || "100px"};
  color: white;
  border: none;
  cursor: pointer;
`;

export default Button;
