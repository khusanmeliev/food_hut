import React from "react";
import { Box, Wrapper } from "./Offer.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Flexbox from "../../components/Flexbox/Flexbox";

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
          <Flexbox
            wd="200px"
            hg="200px"
            background="hsla(0, 0%, 77%, 1)"
            style={{ display: "block", margin: "0 auto", marginTop: "-90px" }}
          ></Flexbox>
        </Box>
      </Flexbox>
    </Wrapper>
  );
};

export default Offer;
