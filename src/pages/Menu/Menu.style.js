import styled from "styled-components";
import first from "../../assets/img/offer/1.jpg";
import second from "../../assets/img/offer/2.jpg";
import third from "../../assets/img/offer/3.jpg";
import mobile from "../../assets/styles/size";
import Button from "../../components/Button/Button";
import colors from "../../assets/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const FoodMenu = styled.div`
  width: 80%;
  height: 300px;
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
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: ${colors.red};
    color: white;
  }
`;

export const Box = styled.div`
  width: 280px;
  height: 350px;
  background: linear-gradient(
    179.69deg,
    rgba(255, 255, 255, 0) -0.53%,
    #f54748 703.75%
  );
  color: #fff;
  border-radius: 20px;
  margin: 100px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    font-size: 25px;
    color: rgba(255, 184, 0, 1);
  }
  ${mobile.lg} {
    margin: 80px 50px;
  }
  ${mobile.sm} {
    width: 500px;
  }
`;

export const Image = styled.img`
  width: 178px;
  height: 178px;
  margin-top: -140px;
  mix-blend-mode: multiply;
`;

export const Price = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(253, 197, 94, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 4px solid #fff;
  border-radius: 50%;
  margin-left: 90px;
  margin-top: -190px;
  font-size: 18px;
`;

export const RateBox = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${first});
  border-radius: 50%;
  &:nth-child(2n) {
    margin-left: -15px;
    border: 2px solid #ffffff;
    background-image: url(${second});
  }
  &:nth-child(3n) {
    margin-left: -15px;
    border: 1px solid #fff;
    background-image: url(${third});
  }
`;
