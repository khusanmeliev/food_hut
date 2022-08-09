import styled, { css } from "styled-components";
import colors from "../../assets/styles/colors";
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
  color: ${({ color }) => color || colors.heading.black};
  text-align: ${({ align }) => align};
  margin: 0;

  /* ${mobile} {
    font-size: 45px;
  } */
`;

export default Heading;
