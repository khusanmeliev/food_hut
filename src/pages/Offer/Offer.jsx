import React from "react";
import { Box, Image, Wrapper } from "./Offer.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Flexbox from "../../components/Flexbox/Flexbox";
import Button from "../../components/Button/Button";

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

      <Flexbox wd="100%" hg="500px">
         <Box>
            <Image src='' alt='pic' />
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
      </Flexbox>
    </Wrapper>
  );
};

export default Offer;
