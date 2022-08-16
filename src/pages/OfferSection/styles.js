import styled from "styled-components";
import firstPic from "../../assets/img/avatars/1.jpg";
import secondPic from "../../assets/img/avatars/2.jpg";
import thirdPic from "../../assets/img/avatars/3.jpg";
import { COLORS } from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: ${({ theme }) => theme.background};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  color: ${({ theme }) => theme.text};

  span {
    color: #f54748;
  }
  ${mobile.lg} {
    width: 80%;
  }
`;

/* Offers Wrapper*/

export const OfferWrapper = styled.div`
  padding: 100px 30px 100px;
  flex-wrap: wrap;
  display: flex;
`;

export const OfferBox = styled.div`
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
  width: 178px;
  height: 178px;
  margin-top: -150px;
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
  margin: -200px 90px;
  font-size: 18px;
`;

export const RatesWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RateBox = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${firstPic});
  border-radius: 50%;
  margin: 10px;
  &:nth-child(2n) {
    margin-left: -20px;
    border: 1px solid #ffffff;
    background-image: url(${secondPic});
  }
  &:nth-child(3n) {
    margin-left: -20px;
    border: 1px solid #fff;
    background-image: url(${thirdPic});
  }
`;

export const OfferBoxTitle = styled(Heading)`
  text-align: center;
  font-size: 30px;
  margin-top: 50px;
  color: ${COLORS.red};

  ${mobile.lg} {
    font-size: 30px;
  }
`;

export const OfferBoxDescription = styled.p`
  width: 80%;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const OfferBoxButton = styled(Button)`
  font-size: 16px;
  margin-top: 335px;
  position: absolute;
  color: ${({ theme }) => theme.button};
`;

export const OffersTexts = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
  display: flex;
`;

export const Picture = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-start;

  ${mobile.lg} {
    display: none;
  }
`;

export const PizzaImage = styled.img`
  width: 600px;
  margin-top: -180px;
`;

export const TextsWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  ${mobile.lg} {
    width: 100%;
    align-items: start;
    justify-content: flex-start;
  }

  span {
    color: hsla(360, 90%, 62%, 1);

    &:nth-child(2) {
      color: hsla(39, 98%, 68%, 1);
    }
  }

  ${mobile.md} {
    padding: 0px 20px;

    h1 {
      font-size: 35px;
      text-align: left;
    }
    p {
      font-size: 18px;
      width: 95%;
      text-align: left;
      margin-top: 15px;
    }
  }
`;

export const Row = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 320px 200px;

  ${mobile.lg} {
    display: flex;
    flex-direction: column;
  }

  p {
    ${mobile.lg} {
      font-size: 18px;
    }
  }
`;

export const RowsColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  /* margin: 10px 0px; */
`;

export const RowImage = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;
