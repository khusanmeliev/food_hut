import styled from "styled-components";
import first from "../../assets/img/avatars/1.jpg";
import second from "../../assets/img/avatars/2.jpg";
import third from "../../assets/img/avatars/3.jpg";
import { COLORS } from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledHeading = styled(Heading)`
  margin-top: 30px;
  text-align: center;
  color: ${({ theme }) => theme.heading};

  span {
    color: ${COLORS.red};

    :nth-child(2) {
      color: #fdc55e;
    }
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
  width: 98px;
  color: ${({ theme }) => theme.button};
  border: 1px solid black;
  background-color: inherit;
  border: 2px solid ${({ theme }) => theme.button};

  &:hover {
    background-color: ${COLORS.red};
    border: none;
  }
`;

export const FoodWrapper = styled.div`
  padding: 100px 30px 10px;
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
  background: ${({ theme }) => theme.box};
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

export const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-top: -150px;
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
  margin-top: -200px;
  font-size: 18px;
`;

export const RateBox = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${first});
  border-radius: 50%;
  margin: 10px;
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

export const FoodBoxTitle = styled(Heading)`
  text-align: center;
  font-size: 30px;
  margin-top: 50px;
  color: ${COLORS.red};

  ${mobile.lg} {
    font-size: 30px;
  }
`;

export const FoodBoxDescription = styled.p`
  width: 80%;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const FoodBoxButton = styled(Button)`
  font-size: 16px;
  margin-top: 320px;
  position: absolute;
  color: ${({ theme }) => theme.button};
`;
