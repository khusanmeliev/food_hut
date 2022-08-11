import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { foods } from "../../mock/foods";
import { Box, BTN, Buttons, Image, Price, RateBox, Wrapper } from "./styles";

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
          marginTop: "90px",
          display: "flex",
          flexWrap: "wrap",
          height: "auto",
          width: "100%",
        }}
      >
        {foods.map((food) => (
          <Box key={food.id}>
            <Image src={food.img} alt="pic" />
            <Price>{food.price}$</Price>
            <div
              style={{
                width: "100%",
                height: "15%",
                marginTop: "30px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <RateBox></RateBox>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <FaStar />
              <Text size="18px">({food.rate})</Text>
            </div>
            <Heading size="24px" align="center" color="red">
              {food.title}
            </Heading>
            <Text align="center" wd="80%" size="16px">
              {food.text}
            </Text>
            <Button
              size="16px"
              style={{ marginTop: "3500px", position: "absolute" }}
            >
              Order Now
            </Button>
          </Box>
        ))}
      </div>
    </Wrapper>
  );
};

export default MenuSection;
