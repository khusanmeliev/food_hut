import React from "react";
import chef from "../../assets/img/appAd/chef.png";
import chefBack from "../../assets/img/appAd/chefBack.png";
import imgCircle from "../../assets/img/imageCircle.png";

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
  ImageChef,
  ImageCircle,
  ImageRoom,
  Wrapper,
} from "./styles";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppAdvertSection = () => {
  return (
    <Wrapper id="food">
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
        <ImageCircle src={imgCircle} />
        <ImageRoom src={chefBack} />
        <ImageChef src={chef} alt="pic" />
        {/* <ImageBorderImg src={firstPic} />
        <ImageBorderImg src={secondPic} />
        <ImageBorderImg src={thirdPic} />
        <ImageBorderImg src={fourthPic} /> */}
      </ImageBox>
    </Wrapper>
  );
};

export default AppAdvertSection;
