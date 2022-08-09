import styled from "styled-components";
import mobile from "../../assets/styles/size";

export const Wrapper = styled.div`
  height: 80vh;
  margin-top: 80px;
  padding: 20px 80px 80px 80px;
  background: linear-gradient(
    180deg,
    rgba(245, 71, 72, 0.06) 0%,
    rgba(245, 71, 72, 0) 100%
  );
  display: flex;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;

  ${mobile.md} {
    width: 100%;
    flex-direction: column;
    height: 120vh;
  }
`;

export const TextsContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  ${mobile.md} {
    width: 100%;
    height: 100%;
    gap: 20px;
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

export const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-left: 50px;
  cursor: pointer;

  svg {
    color: #f54748;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const PicContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile.md} {
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
    width: 260px;
    position: absolute;
    height: 350px;
    margin-top: -20px;
    mix-blend-mode: multiply;
  }
`;

export const Box = styled.div`
  width: 350px;
  height: 350px;
  background-color: #f54748;
  border-radius: 50%;
`;
