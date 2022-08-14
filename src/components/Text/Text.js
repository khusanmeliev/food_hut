import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

export default Text;
