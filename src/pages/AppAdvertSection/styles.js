import styled from "styled-components";
import mobile from "../../assets/styles/size";
import ButtonWrapper from "../../components/Button/styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  span {
    color: ${({ theme }) => theme.red};
  }

  ${mobile.lg} {
    width: 100%;
    height: 1000px;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Details = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${mobile.lg} {
    width: 95%;
  }
`;

export const Buttons = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const Button = styled(ButtonWrapper)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  svg {
    font-size: 30px;
  }
`;

export const ImageBox = styled.div`
  width: 50%;
  height: 90%;
  background-color: rebeccapurple;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${mobile.lg} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    margin-left: -70px;
    position: absolute;

    ${mobile.lg} {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }
`;
