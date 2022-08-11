import styled from "styled-components";
import mobile from "../../assets/styles/size";

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: ${({ size }) => size || "20px"};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};

  ${mobile} {
  }
`;

export default Text;
