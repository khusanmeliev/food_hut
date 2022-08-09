import React from "react";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { foods } from "../../mock/foodsMenu";
import { Box, BTN, FoodMenu, FoodsBox, Image, Wrapper } from "./Menu.style";

const Menu = () => {
  return (
    <Wrapper>
      <FoodMenu>
        <Heading align="center">
          <span>Menu</span> That{" "}
          <span style={{ color: "#FDC55E" }}>Always</span> Make You <br /> Fall
          In <span>Love</span>
        </Heading>
        <Flexbox wd="80%" hg="100px" justify="space-evenly" row="row">
          <BTN>Ramen</BTN>
          <BTN>Breakfast</BTN>
          <BTN>Lunch</BTN>
          <BTN>Dinner</BTN>
          <BTN>Maxican</BTN>
          <BTN>Italian</BTN>
          <BTN>Desserts</BTN>
          <BTN>Drinks</BTN>
        </Flexbox>
      </FoodMenu>
      <FoodsBox>
        {foods.map((food) => (
          <Box key={food.id}>
            <Image src={food.img} />
            <Flexbox wd="100%" hg="15%" background="blue">
              fsdfs
            </Flexbox>
            <Heading size="sm" align="center" color="red">
              Kebab
            </Heading>
            <Text align="center" wd="80%">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
            <Button
              wd="131px"
              borderRadius="100px"
              style={{ marginTop: "370px", position: "absolute" }}
            >
              Order Now
            </Button>
          </Box>
        ))}
      </FoodsBox>
    </Wrapper>
  );
};

export default Menu;
