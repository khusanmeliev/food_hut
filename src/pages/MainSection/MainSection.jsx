import React from "react";
import Text from "../../components/Text/Text";
import { FaHeart, FaPlay } from "react-icons/fa";
import leaf from "../../assets/img/home/leaf.jpg";
import pizzaGirl from "../../assets/img/home/pizzaGirl.jpg";
import pizzaGirlBorder from "../../assets/img/imageCircle.png";
import orange from "../../assets/img/home/orange.jpg";
import fire from "../../assets/img/home/fire.jpg";
import vectorLine from "../../assets/img/home/vectorLine.jpg";

import {
  Wrapper,
  DownloadBtn,
  PictureContainer,
  PlayIcon,
  Rectangle,
  TextsContainer,
  Input,
  Title,
  PizzaImage,
  BorderImage,
  LeafImage,
  OrangeImage,
  FireImage,
  VectorLineImage,
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
        <OrangeImage src={orange} alt="orange" />
        <Title>
          We're <span>Serious</span> For
          <span> Food </span> &
          <span style={{ color: "#FDC55E" }}> Delivery</span>.
        </Title>

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

      <PictureContainer>
        <FireImage src={fire} alt="fire" />
        <LeafImage src={leaf} alt="left" />
        <VectorLineImage src={vectorLine} />
        <PizzaImage src={pizzaGirl} alt="pizzaGirl" />
        <BorderImage src={pizzaGirlBorder} alt="border of pizza girl" />
      </PictureContainer>
    </Wrapper>
  );
};

export default MainSection;
