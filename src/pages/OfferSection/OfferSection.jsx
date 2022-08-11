import React from "react";
import { Box, Wrapper } from "./styles";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const OfferSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "70%",
        }}
      >
        <Heading>
          Today <span style={{ color: "#F54748" }}>Special</span> Offers
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <button onClick={toggleTheme}>toggle: {theme}</button>
      </div>

      <Box></Box>
    </Wrapper>
  );
};

export default OfferSection;
