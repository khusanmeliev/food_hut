import styled from "styled-components";

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
  height: 368px;
  left: 75px;
  top: 3183px;
  background: linear-gradient(
    179.69deg,
    rgba(255, 255, 255, 0) -31.53%,
    #f54748 303.75%
  );
  color: #fff;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 198px;
  height: 198px;
  margin-top: -130px;
  mix-blend-mode: multiply;
`;

export const Price = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(253, 197, 94, 1);
  border-radius: 50%;
  border: 4px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 90px;
  margin-top: -140px;
`;
