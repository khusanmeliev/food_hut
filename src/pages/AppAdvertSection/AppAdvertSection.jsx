import React from "react";
import {
  AppDetails,
  AppName,
  AppText,
  Button,
  Buttons,
  Details,
  DetailsHeading,
  DetailsText,
  ImageBox,
  Wrapper,
} from "./styles";
import owpaz from "../../assets/img/appAd/oshpaz.jpg";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppAdvertSection = () => {
  return (
    <Wrapper>
      <Details>
        <DetailsHeading>
          It’s Now <span>More Easy</span> to
          <span style={{ color: "#FDC55E" }}> Order</span> by Our Mobile
          <span> App</span>
        </DetailsHeading>
        <DetailsText>
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </DetailsText>
        <Buttons>
          <Button>
            <FaGooglePlay />
            <AppDetails>
              <AppText>GET IT ON</AppText>
              <AppName>Google Play</AppName>
            </AppDetails>
          </Button>
          <Button>
            <FaApple />
            <AppDetails>
              <AppText>Download on the</AppText>
              <AppName>App Store</AppName>
            </AppDetails>
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
