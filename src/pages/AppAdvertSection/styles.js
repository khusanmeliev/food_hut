import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";
import ButtonWrapper from "../../components/Button/styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";

export const Wrapper = styled.div`
  padding: 80px 0px 150px;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  ${mobile.lg} {
    width: 90%;
    align-items: flex-end;
  }
`;

export const DetailsHeading = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.heading};

  span {
    color: ${COLORS.red};
  }

  ${mobile.lg} {
    width: 95%;
  }
`;

export const DetailsText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};

  ${mobile.lg} {
    width: 95%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 30px;

  ${mobile.lg} {
    width: 95%;
    flex-direction: column;
  }
`;

export const Button = styled(ButtonWrapper)`
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.button};
  margin: 5px;

  svg {
    font-size: 35px;
    color: ${({ theme }) => theme.appDetails};
  }

  ${mobile.lg} {
    width: 200px;
    margin: 10px 0px;
  }
`;

export const AppDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AppText = styled(Text)`
  color: ${({ theme }) => theme.appDetails};
  font-size: 13px;
`;

export const AppName = styled(Heading)`
  color: ${({ theme }) => theme.appDetails};
  font-size: 15px;
`;

export const ImageBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile.lg} {
    display: none;
  }
`;

export const ImageRoom = styled.img`
  width: 400px;
  height: 400px;
`;

export const ImageChef = styled.img`
  width: 400px;
  height: 480px;
  border-radius: 50%;
  position: absolute;
  margin-top: -40px;
`;

export const ImageCircle = styled.img`
  width: 500px;
  position: absolute;
  margin-top: 10px;
`;

export const ImageBorderImg = styled.img`
  width: 100px;
  height: 100px;
  mix-blend-mode: multiply;
`;
