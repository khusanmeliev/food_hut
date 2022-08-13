import styled, { css } from "styled-components";
import mobile from "../../assets/styles/size";

const headingSize = {
  sm: css`
    font-size: 30px;
  `,
  md: css`
    font-size: 40px;
  `,
  lg: css`
    font-size: 55px;
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || "md"] || size};
  color: ${({ theme }) => theme.heading || theme};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};

  ${mobile.md} {
    font-size: 40px;
  }
`;

export default Heading;
