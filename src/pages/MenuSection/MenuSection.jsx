import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button/Button";
import ButtonWrapper from "../../components/Button/styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { foods } from "../../mock/foods";
import {
  Box,
  BTN,
  Buttons,
  Circle,
  Image,
  Price,
  RateBox,
  Wrapper,
} from "./styles";

const MenuSection = () => {
  return (
    <Wrapper>
      <Heading align="center" style={{ marginTop: "100px" }}>
        <span>Menu</span> That <span style={{ color: "#FDC55E" }}>Always</span>{" "}
        Make You <br /> Fall In <span>Love</span>
      </Heading>

      <Buttons>
        <BTN>Ramen</BTN>
        <BTN>Breakfast</BTN>
        <BTN>Lunch</BTN>
        <BTN>Dinner</BTN>
        <BTN>Maxican</BTN>
        <BTN>Italian</BTN>
        <BTN>Desserts</BTN>
        <BTN>Drinks</BTN>
      </Buttons>

      <div
        style={{
          width: "100%",
          marginTop: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "auto",
        }}
      >
        {foods.map((food) => (
          <Box key={food.id}>
            <Circle>
              <Image src={food.img} alt="pic" />
            </Circle>
            <Price>{food.price}$</Price>
            <div
              style={{
                width: "100%",
                height: "10%",
                marginTop: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <RateBox></RateBox>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <FaStar />
              <Text size="18px">({food.rate})</Text>
            </div>
            <Heading
              size="24px"
              align="center"
              margin="10px"
              style={{ marginTop: "50px", fontWeight: "600" }}
            >
              {food.name}
            </Heading>
            <Text size="16px" align="center" width="80%">
              {food.description}
            </Text>
            <ButtonWrapper
              size="16px"
              style={{
                marginTop: "350px",
                position: "absolute",
              }}
            >
              Order Now
            </ButtonWrapper>
          </Box>
        ))}
      </div>
    </Wrapper>
  );
};

export default MenuSection;
