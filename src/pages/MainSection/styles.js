import styled from "styled-components";
import mobile from "../../assets/styles/size";

export const Wrapper = styled.div`
  padding: 90px 80px 80px 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: ${({ theme }) => theme.background};
  ${mobile.lg} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0px;
  }

  span {
    color: hsla(360, 90%, 62%, 1);
  }
`;

export const TextsContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mobile.lg} {
    width: 90%;
    height: 100%;
    gap: 5px;
    box-sizing: border-box;
  }

  input {
    width: 90%;
    height: 40px;
    background: white;
    border: 0.5px solid #191919;
    margin-top: 30px;
    outline: none;
    border-radius: 100px;
    text-indent: 10px;
    ${mobile.lg} {
      margin-top: 10px;
    }
  }
`;

export const Rectangle = styled.div`
  width: 190px;
  height: 30px;
  background: linear-gradient(
    180deg,
    rgba(245, 71, 72, 0.06) 0%,
    rgba(245, 71, 72, 0) 100%
  );
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    background-color: #f54748;
    color: #fdc55e;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};

  ${mobile.lg} {
    font-size: 35px;
    letter-spacing: 0px;
  }
`;

export const OrangeImage = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  margin: -110px 410px;

  ${mobile.md} {
    margin: -90px 190px;
  }
`;

export const PictureContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mobile.lg} {
    display: none;
  }
`;

export const FireImage = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  margin: -230px 0px;
`;

export const LeafImage = styled.img`
  width: 100px;
  mix-blend-mode: multiply;
  position: absolute;
  margin: -148px 100px;
  transform: rotate(-8deg);
`;

export const VectorLineImage = styled.img`
  width: 100px;
  position: absolute;
  margin: -80px 220px;
  mix-blend-mode: multiply;
`;
export const PizzaImage = styled.img`
  width: 340px;
  mix-blend-mode: multiply;
`;

export const BorderImage = styled.img`
  width: 410px;
  mix-blend-mode: multiply;
  position: absolute;
  margin-top: 10px;
`;

export const DownloadBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 15px;
  margin-top: 20px;

  ${mobile.lg} {
    gap: 0px;
    margin-top: 20px;
  }

  p {
    ${mobile.lg} {
      font-size: 18px;
      margin-left: 8px;
    }
  }

  button {
    ${mobile.md} {
      width: 120px;
    }
  }
`;

export const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.playIconBoxShadow};
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-left: 50px;

  ${mobile.lg} {
    margin-left: 10px;
    width: 40px;
    height: 40px;
  }
  svg {
    color: #f54748;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 48px;
  width: 200px;
  border-radius: 38px;
  background-color: #e6e6e6;
`;

export const FoodImage = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  width: 130px;
  margin: 70px -190px;
`;
export const FoodImagesecond = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  width: 130px;
  margin: 180px -100px;
`;
export const FoodImagethird = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  width: 130px;
  margin: 70px -190px;
`;
export const FoodImagefourth = styled.img`
  mix-blend-mode: multiply;
  position: absolute;
  width: 130px;
  margin: 70px -190px;
`;
