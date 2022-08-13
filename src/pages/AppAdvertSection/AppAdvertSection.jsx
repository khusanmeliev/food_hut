import React from "react";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { Button, Buttons, Details, ImageBox, Wrapper } from "./styles";
import owpaz from "../../assets/img/appAd/oshpaz.jpg";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";


const AppAdvertSection = () => {
  return (
    <Wrapper>
      <Details>
        <Heading size="38px">
          It’s Now <span>More Easy</span> to{" "}
          <span style={{ color: "#FDC55E" }}>Order</span> by Our Mobile
          <span>App</span>
        </Heading>
        <Text size="18px">
          All you need to do is downlode one of the best delivery apps, make{" "}
          <br /> a and most companies are opting for mobile app devlopment for{" "}
          <br />
          food delivery
        </Text>
        <Buttons>
          <Button>
            <FaGooglePlay />
          </Button>
          <Button
            style={{
              margin: "0px 40px",
              borderRadius: "7px",
            }}
          >
            <AiOutlineApple />
          </Button>
        </Buttons>
      </Details>
      <ImageBox>
        <img src={owpaz} alt="pic" />
      </ImageBox>
    </Wrapper>
  );
};

export default AppAdvertSection;
