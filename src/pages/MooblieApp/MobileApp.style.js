import styled from "styled-components";
import colors from "../../assets/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    color: ${colors.red};
  }
`;

export const Details = styled.div`
  width: 45%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
