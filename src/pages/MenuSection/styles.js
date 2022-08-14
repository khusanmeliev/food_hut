import styled from "styled-components";
import first from "../../assets/img/offer/1.jpg";
import second from "../../assets/img/offer/2.jpg";
import third from "../../assets/img/offer/3.jpg";
import { COLORS } from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled(Heading)`
  text-align: center;
  color: ${COLORS.black};

  span {
    color: ${COLORS.red};
  }
`;

export const MenuButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 150px 60px;

  ${mobile.lg} {
    display: none;
  }
`;

export const BTN = styled(Button)`
  color: ${({ theme }) => theme.button};
  border: 1px solid black;

  &:hover {
    background-color: ${({ theme }) => theme.red};
    color: white;
  }
`;

export const FoodWrapper = styled.div`
  padding: 100px 30px 100px;
  flex-wrap: wrap;
  display: flex;
`;

export const RatesWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FoodBox = styled.div`
  width: 280px;
  height: 340px;
  background: ${({ theme }) => theme.offerBox};
  color: #fff;
  border-radius: 20px;
  margin: 100px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Sofia Pro";
  font-weight: 400;
  line-height: 21px;

  svg {
    font-size: 25px;
    color: rgba(255, 184, 0, 1);
  }

  span {
    color: ${({ theme }) => theme.red};
  }

  ${mobile.lg} {
    width: 90%;
  }
`;

export const FoodBoxTitle = styled(Heading)`
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  ${mobile.lg} {
    font-size: 30px;
  }
`;

export const FoodBoxDescription = styled.p`
  width: 80%;
  text-align: center;
`;

export const FoodBoxButton = styled(Button)`
  font-size: 16px;
  margin-top: 320px;
  position: absolute;
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
  border: 3px solid #fff;
  border-radius: 50%;
  margin-left: 90px;
  margin-top: -180px;
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
