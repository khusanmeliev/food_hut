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
`;

export const Box = styled.div`
  width: 310px;
  height: 400px;
  left: 75px;
  top: 3183px;
  background: linear-gradient(
    179.69deg,
    rgba(255, 255, 255, 0) -0.53%,
    #f54748 300.75%
  );
  color: #fff;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    font-size: 40px;
    color: rgba(255, 184, 0, 1);
  }
  ${mobile.lg} {
    margin: 50px;
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
  border-radius: 50%;
  border: 4px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 90px;
  margin-top: -190px;
`;

export const RateBox = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${first});
  border-radius: 50%;
  &:nth-child(2n) {
    margin-left: -15px;
    border: 1px solid #fff;
    background-image: url(${second});
  }
  &:nth-child(3n) {
    margin-left: -15px;
    border: 1px solid #fff;
    background-image: url(${third});
  }
`;
