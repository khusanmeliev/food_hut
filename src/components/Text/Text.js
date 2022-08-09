import styled from "styled-components";
import colors from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";

const Text = styled.p`
  width: ${({ wd }) => wd};
  color: ${colors.text.black};
  font-size: ${({ size }) => size || "20px"};
  text-align: ${({ align }) => align};
  margin: 0;

  ${mobile} {
  }
`;

export default Text;
