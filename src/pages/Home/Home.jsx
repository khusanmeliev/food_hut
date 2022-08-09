import React from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { FaHeart, FaPlay } from "react-icons/fa";
import pizzaGirl from "../../assets/img/pizzaGirl.jpg";
import {
  Box,
  Frame,
  PicContainer,
  PlayIcon,
  Rectangle,
  TextsContainer,
  Wrapper,
} from "./Home.style";
import Button from "../../components/Button/Button";

const Home = () => {
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

        <Flexbox wd="100%" row gap="15px" justify="flex-start">
          <Button>Downlode App</Button>

          <PlayIcon>
            <FaPlay />
          </PlayIcon>
          <Text>Watch Video</Text>
        </Flexbox>
      </TextsContainer>

      <PicContainer>
        <Frame>
          <Box></Box>
          <img src={pizzaGirl} alt="pizzaGirl" />
        </Frame>
      </PicContainer>
    </Wrapper>
  );
};

export default Home;
