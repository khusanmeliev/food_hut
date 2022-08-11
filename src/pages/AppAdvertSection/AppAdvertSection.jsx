import React from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { Details, Wrapper } from "./styles";

const AppAdvertSection = () => {
  return (
    <Wrapper>
      <Details>
        <Heading>
          It’s Now <span>More Easy</span> to{" "}
          <span style={{ color: "#FDC55E" }}>Order</span> <br /> by Our Mobile{" "}
          <span>App</span>
        </Heading>
        <Text>
          All you need to do is downlode one of the best delivery apps, make{" "}
          <br /> a and most companies are opting for mobile app devlopment for{" "}
          <br />
          food delivery
        </Text>
        <Button></Button>
        <Button></Button>
      </Details>
    </Wrapper>
  );
};

export default AppAdvertSection;
