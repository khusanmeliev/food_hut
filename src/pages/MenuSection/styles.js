import styled from "styled-components";
import first from "../../assets/img/offer/1.jpg";
import second from "../../assets/img/offer/2.jpg";
import third from "../../assets/img/offer/3.jpg";
import mobile from "../../assets/styles/size";
import ButtonWrapper from "../../components/Button/styles";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  background: ${({ theme }) => theme.background};
`;

export const Buttons = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${mobile.lg} {
    display: none;
  }
`;

export const BTN = styled(ButtonWrapper)`
  width: 98px;
  height: 44px;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: ${({ theme }) => theme.red};
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
    margin: 80px 50px;
  }

  ${mobile.sm} {
    width: 500px;
  }
`;

export const Circle = styled.div`
  box-sizing: border-box;
  position: absolute;
  background-color: red;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -350px;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 178px;
  height: 178px;
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
  margin-top: -278px;
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
