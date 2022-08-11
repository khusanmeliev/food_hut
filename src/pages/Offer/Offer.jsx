import React from "react";
import { Box, Image, Price, RateBox, Wrapper } from "./Offer.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Flexbox from "../../components/Flexbox/Flexbox";
import Button from "../../components/Button/Button";
import { FaStar } from "react-icons/fa";
import offerMenu from "../../mock/offerMenu";

const Offer = () => {
  return (
    <Wrapper>
      <Flexbox wd="70%" gap="20px">
        <Heading>
          Today <span style={{ color: "#F54748" }}>Special</span> Offers
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </Flexbox>

      <Flexbox
        wd="100%"
        hg="auto"
        row
        style={{ marginTop: "90px" }}
        flexWrap="wrap"
      >
        {offerMenu.map((offer) => (
          <>
            <Box key={offer.id}>
              <Image src={offer.img} alt="pic" />
              <Price>{offer.price}$</Price>
              <Flexbox
                wd="100%"
                hg="15%"
                flexWrap
                row
                style={{ marginTop: "20px" }}
              >
                <RateBox></RateBox>
                <RateBox></RateBox>
                <RateBox></RateBox>
                <FaStar />
                <Text>({offer.rate})</Text>
              </Flexbox>
              <Heading size="sm" align="center" color="red">
                {offer.title}
              </Heading>
              <Text align="center" wd="80%">
                {offer.text}
              </Text>
              <Button style={{ marginTop: "395px", position: "absolute" }}>
                Order Now
              </Button>
            </Box>
          </>
        ))}
      </Flexbox>
    </Wrapper>
  );
};

export default Offer;
