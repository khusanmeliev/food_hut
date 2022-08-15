import React from "react";
import {
  Frame,
  Image,
  OfferBox,
  OfferBoxButton,
  OfferBoxDescription,
  OfferBoxTitle,
  OffersTexts,
  OfferWrapper,
  Pic,
  PicBox,
  Price,
  RateBox,
  RatesWrapper,
  Row,
  Texts,
  TextsColumn,
  TextsImage,
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
import pizzaGirl from "../../assets/img/home/pizzaGirl.jpg";

const OfferSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>
        <Heading>
          Today <span>Special</span> Offers
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <button onClick={toggleTheme}>toggle: {theme}</button>
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

      <OffersTexts>
        <Pic>
          <Frame>
            <PicBox></PicBox>
            <img src={pizzaGirl} alt="pizzaGirl" />
            <Text>Online order</Text>
          </Frame>
        </Pic>

        <Texts>
          <Heading>
            We are <span>more</span> than
            <span>multiple</span>
            services
          </Heading>
          <Text>
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </Text>
          <TextsWrapper>
            <Row>
              {offerTexts.map((txt) => (
                <TextsColumn>
                  <TextsImage src={txt.img} alt="order" />
                  <Text>{txt.text}</Text>
                </TextsColumn>
              ))}
            </Row>
          </TextsWrapper>
        </Texts>
      </OffersTexts>
    </Wrapper>
  );
};

export default OfferSection;
