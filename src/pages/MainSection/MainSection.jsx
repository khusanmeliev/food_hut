import React from "react";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { FaHeart, FaPlay } from "react-icons/fa";
import pizzaGirl from "../../assets/img/home/pizzaGirl.jpg";

import {
  Wrapper,
  Box,
  DownloadBtn,
  Frame,
  PicContainer,
  PlayIcon,
  Rectangle,
  TextsContainer,
} from "./styles";
import Button from "../../components/Button/Button";

const MainSection = () => {
  return (
    <Wrapper>
      <TextsContainer>
        <Rectangle>
          <FaHeart />
          People Trust Us
        </Rectangle>

        <Heading size="lg">
          We're <span>Serious</span> For <span>Food </span> &
          <span style={{ color: "#FDC55E" }}> Delivery</span>.
        </Heading>

        <Text>
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </Text>

        <Input type="text" placeholder="Search Food" />

        <DownloadBtn>
          <Button>Downlode App</Button>
          <PlayIcon>
            <FaPlay />
          </PlayIcon>
          <Text>Watch Video</Text>
        </DownloadBtn>
      </TextsContainer>

      <PicContainer>
        <Frame>
          <Box>
            {/* <img src={first} alt="red" />
            <img src={second} alt="red" />
            <img src={third} alt="red" />
            <img src={fourth} alt="red" /> */}
          </Box>
          <img src={pizzaGirl} alt="pizzaGirl" />
        </Frame>
      </PicContainer>
    </Wrapper>
  );
};

export default MainSection;
