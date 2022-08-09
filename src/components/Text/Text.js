import styled from "styled-components";
import colors from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";

const Text = styled.p`
  color: ${colors.text.black};
  font-size: ${({ fontSize }) => fontSize || "20px"};
  text-align: ${({ align }) => align};
  margin: 0;
  ${mobile} {
  }
`;

export default Text;
