import styled from "styled-components";
import mobile from "../../assets/styles/size";

export const Wrapper = styled.div`
  padding: 150px 80px 80px 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: ${({ theme }) => theme.background};
  ${mobile.md} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px 0px;
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
    gap: 0px;
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
  width: 150px;
  height: 28px;
  background: #f54748;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    background-color: #f54748;
    color: #fdc55e;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const PicContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const Box = styled.div`
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
  margin-left: 50px;
  cursor: pointer;

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
