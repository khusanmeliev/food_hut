import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 80%;
  height: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

export const SocialMedias = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li {
      list-style-type: none;
      font-size: 20px;
      margin: 10px;
    }
  }
`;

export const Lists = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    width: 35%;
    height: 60%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    li {
      list-style-type: none;
      margin: 8px;

      :nth-child(1) {
        font-weight: 600;
        color: red;
        font-size: 20px;
        margin: 10px 10px;
      }
    }
  }
`;

export const Message = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ul {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-start;
  }
`;
