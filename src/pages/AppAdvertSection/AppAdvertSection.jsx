import React from "react";
import ButtonWrapper from "../../components/Button/styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { Buttons, Details, ImageBox, Wrapper } from "./styles";
import owpaz from "../../assets/img/owpaz.jpg";

const AppAdvertSection = () => {
  return (
    <Wrapper>
      <Details>
        <Heading>
          It’s Now <span>More Easy</span> to{" "}
          <span style={{ color: "#FDC55E" }}>Order</span> <br /> by Our Mobile{" "}
          <span>App</span>
        </Heading>
        <Text>
          All you need to do is downlode one of the best delivery apps, make{" "}
          <br /> a and most companies are opting for mobile app devlopment for{" "}
          <br />
          food delivery
        </Text>
        <Buttons>
          <ButtonWrapper width="135px" borderRadius="5px"></ButtonWrapper>
          <ButtonWrapper
            width="120px"
            borderRadius="7px"
            style={{ margin: "0px 40px", borderRadius: "7px" }}
          ></ButtonWrapper>
        </Buttons>
      </Details>
      <ImageBox>
        <img src={owpaz} alt="pic" />
      </ImageBox>
    </Wrapper>
  );
};

export default AppAdvertSection;
