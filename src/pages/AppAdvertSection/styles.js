import styled from "styled-components";

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
`;

export const Details = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Buttons = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const ImageBox = styled.div`
  width: 50%;
  height: 90%;
  background-color: rebeccapurple;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    width: 370px;
    height: 370px;
    /* mix-blend-mode: multiply; */
    border-radius: 50%;
    margin-left: -100px;
  }
`;
