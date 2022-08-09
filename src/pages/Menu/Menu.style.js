import styled from "styled-components";
import Button from "../../components/Button/Button";
import colors from "../../assets/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const FoodMenu = styled.div`
  width: 80%;
  height: 300px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: ${colors.span.red};
  }
`;

export const BTN = styled(Button)`
  width: 98px;
  height: 44px;
  border-radius: 100px;
  background-color: white;
  color: black;
  border: 1px solid black;

  :nth-child(1) {
    color: white;
    background-color: red;
    border: none;
  }
`;

export const FoodsBox = styled.div`
  width: 100%;
  height: 150vh;
  background-color: gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 310px;
  height: 368px;
  left: 75px;
  top: 3183px;
  background: linear-gradient(
    179.69deg,
    rgba(255, 255, 255, 0) -31.53%,
    #f54748 303.75%
  );
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 198px;
  height: 198px;
  margin-top: -130px;
  mix-blend-mode: multiply;
`;
