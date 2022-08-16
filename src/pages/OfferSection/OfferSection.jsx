import React from "react";
import {
  Image,
  OfferBox,
  OfferBoxButton,
  OfferBoxDescription,
  OfferBoxTitle,
  OffersTexts,
  OfferWrapper,
  Picture,
  PizzaImage,
  Price,
  RateBox,
  RatesWrapper,
  Row,
  RowImage,
  RowsColumn,
  TextsWrapper,
  Title,
  Wrapper,
} from "./styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { offers, offerTexts } from "../../mock/offers";
import { FaStar } from "react-icons/fa";
import chef from "../../assets/img/offer/chef.png";

const OfferSection = () => {
  return (
    <Wrapper id="offers">
      <Title>
        <Heading>
          Today <span>Special</span> Offers
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </Title>
      <OfferWrapper>
        {offers.map((offer) => (
          <OfferBox key={offer.id}>
            <Image src={offer.img} />
            <Price>{offer.price}$</Price>

            <RatesWrapper>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <RateBox></RateBox>
              <FaStar />
              <Text>({offer.rate})</Text>
            </RatesWrapper>

            <OfferBoxTitle>{offer.name}</OfferBoxTitle>
            <OfferBoxDescription>{offer.description}</OfferBoxDescription>
            <OfferBoxButton>Order Now</OfferBoxButton>
          </OfferBox>
        ))}
      </OfferWrapper>

      <OffersTexts id="whyfoodhut">
        <Picture>
          <PizzaImage src={chef} alt="pizzaGirl" />
        </Picture>

        <TextsWrapper>
          <Heading>
            We are <span> more</span> than
            <span> multiple</span> services
          </Heading>
          <Text>
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </Text>
          <Row>
            {offerTexts.map((txt) => (
              <RowsColumn>
                <RowImage src={txt.img} alt="order" />
                <Text>{txt.text}</Text>
              </RowsColumn>
            ))}
          </Row>
        </TextsWrapper>
      </OffersTexts>
    </Wrapper>
  );
};

export default OfferSection;
