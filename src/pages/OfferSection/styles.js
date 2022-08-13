import styled from "styled-components";
import first from "../../assets/img/offer/1.jpg";
import second from "../../assets/img/offer/2.jpg";
import third from "../../assets/img/offer/3.jpg";
import mobile from "../../assets/styles/size";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: ${({ theme }) => theme.background};
`;

export const Box = styled.div`
  width: 280px;
  height: 320px;
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
  h1 {
    ${mobile.lg} {
      font-size: 30px;
    }
  }

  ${mobile.lg} {
    width: 90%;
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

export const OffersTexts = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
  display: flex;
`;

export const Pic = styled.div`
  width: 40%;

  ${mobile.lg} {
    display: none;
  }
`;
export const Frame = styled.div`
  width: 390px;
  height: 390px;
  background: linear-gradient(rgba(245, 71, 72, 0), rgba(253, 197, 94, 1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 130px;

  img {
    width: 280px;
    position: absolute;
    height: 390px;
    margin-top: -45px;
    mix-blend-mode: multiply;
  }
`;

export const PicBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #f54748;
  border-radius: 50%;
  display: flex;
  gap: 20px;

  img {
    mix-blend-mode: multiply;
    width: 100px;
    height: 100px;

    &:nth-child(2n) {
      margin-left: 100px;
    }
  }
`;

export const Texts = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mobile.lg} {
    width: 100%;
  }
`;

export const Txt = styled.div`
  width: 80%;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 320px 300px;

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
