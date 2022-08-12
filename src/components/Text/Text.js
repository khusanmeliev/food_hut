import styled from "styled-components";

const Text = styled.p`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.text};
  font-size: ${({ size }) => size || "20px"};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
`;

export default Text;
