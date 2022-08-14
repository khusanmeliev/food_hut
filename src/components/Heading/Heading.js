import styled, { css } from "styled-components";

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
  color: ${({ theme }) => theme.heading};
  margin: 0;
`;

export default Heading;
