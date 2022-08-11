import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { foods } from "../../mock/foodsMenu";
import {
  Box,
  BTN,
  Buttons,
  Image,
  Price,
  RateBox,
  Wrapper,
} from "./Menu.style";

const Menu = () => {
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

      <Flexbox
        wd="100%"
        hg="auto"
        row
        style={{ marginTop: "90px" }}
        flexWrap="wrap"
      >
        {foods.map((food) => (
          <Box key={food.id}>
            <Image src={food.img} alt="pic" />
            <Price>{food.price}$</Price>
            <Flexbox
              wd="100%"
              hg="15%"
              flexWrap
              row
              style={{ marginTop: "30px" }}
            >
              <RateBox></RateBox>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <FaStar />
              <Text size="18px">({food.rate})</Text>
            </Flexbox>
            <Heading size="24px" align="center" color="red">
              {food.title}
            </Heading>
            <Text align="center" wd="80%" size="16px">
              {food.text}
            </Text>
            <Button
              size="16px"
              style={{ marginTop: "350px", position: "absolute" }}
            >
              Order Now
            </Button>
          </Box>
        ))}
      </Flexbox>
    </Wrapper>
  );
};

export default Menu;
