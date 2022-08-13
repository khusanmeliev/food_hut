import React from "react";
import {
  Box,
  Frame,
  Image,
  OffersTexts,
  Pic,
  PicBox,
  Price,
  RateBox,
  Row,
  Texts,
  Txt,
  Wrapper,
} from "./styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { offers, offerTexts } from "../../mock/offers";
import { FaStar } from "react-icons/fa";
import ButtonWrapper from "../../components/Button/styles";
import pizzaGirl from "../../assets/img/home/pizzaGirl.jpg";

const OfferSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "80%",
          background: `${({ theme }) => theme.background}`,
        }}
      >
        <Heading margin="0">
          Today <span style={{ color: "#F54748" }}>Special</span> Offers
        </Heading>
        <Text margin="0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <button onClick={toggleTheme}>toggle: {theme}</button>
      </div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "auto",
          width: "100%",
        }}
      >
        {offers.map((offer) => (
          <Box key={offer.id}>
            <Image src={offer.img} alt="pic" />
            <Price>{offer.price}$</Price>
            <div
              style={{
                width: "100%",
                height: "10%",
                marginTop: "15px",
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
              <Text>({offer.rate})</Text>
            </div>
            <Heading align="center" size="sm" style={{ marginTop: "30px" }}>
              {offer.name}
            </Heading>
            <Text align="center" width="80%">
              {offer.description}
            </Text>
            <ButtonWrapper
              size="16px"
              style={{
                marginTop: "320px",
                position: "absolute",
              }}
            >
              Order Now
            </ButtonWrapper>
          </Box>
        ))}
      </div>

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
            We are <span style={{ color: "hsla(360, 90%, 62%, 1)" }}>more</span>{" "}
            than
            <span style={{ color: "hsla(39, 98%, 68%, 1)" }}>
              multiple
            </span>{" "}
            services
          </Heading>
          <Text>
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </Text>
          <Txt>
            <Row>
              {offerTexts.map((txt) => (
                <div style={{ display: "flex", gap: "5px" }}>
                  <img
                    src={txt.img}
                    alt="order"
                    style={{ width: "30px", height: "30px", marginTop: "20px" }}
                  />
                  <Text>{txt.text}</Text>
                </div>
              ))}
            </Row>
          </Txt>
        </Texts>
      </OffersTexts>
    </Wrapper>
  );
};

export default OfferSection;
