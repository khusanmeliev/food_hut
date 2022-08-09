import styled from "styled-components";
import colors from "../../assets/styles/colors";

const Button = styled.button`
  width: ${({ wd }) => wd || "150px"};
  height: ${({ hg }) => hg || "40px"};
  background-color: ${colors.button};
  margin: ${({ margin }) => margin};
  color: white;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export default Button;
