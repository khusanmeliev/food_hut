import React from "react";
import { FaStar } from "react-icons/fa";
import Text from "../../components/Text/Text";
import { foods } from "../../mock/foods";
import {
  MenuWrapper,
  MenuButtonWrapper,
  StyledHeading,
  BTN,
  FoodWrapper,
  FoodBox,
  Image,
  Price,
  RateBox,
  FoodBoxButton,
  FoodBoxDescription,
  FoodBoxTitle,
  RatesWrapper,
} from "./styles";

const MenuSection = () => {
  return (
    <MenuWrapper id="menu">
      <StyledHeading>
        <span>Menu</span> That <span> Always</span> Make You <br /> Fall In{" "}
        <span>Love</span>
      </StyledHeading>

      <MenuButtonWrapper>
        <BTN>Ramen</BTN>
        <BTN>Breakfast</BTN>
        <BTN>Lunch</BTN>
        <BTN>Dinner</BTN>
        <BTN>Maxican</BTN>
        <BTN>Italian</BTN>
        <BTN>Desserts</BTN>
        <BTN>Drinks</BTN>
      </MenuButtonWrapper>

      <FoodWrapper>
        {foods.map((food) => (
          <FoodBox key={food.id}>
            <Image src={food.img} />
            <Price>{food.price}$</Price>

            <RatesWrapper>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <FaStar />
              <Text>({food.rate})</Text>
            </RatesWrapper>
            <FoodBoxTitle>{food.name}</FoodBoxTitle>
            <FoodBoxDescription>{food.description}</FoodBoxDescription>
            <FoodBoxButton>Order Now</FoodBoxButton>
          </FoodBox>
        ))}
      </FoodWrapper>
    </MenuWrapper>
  );
};

export default MenuSection;
