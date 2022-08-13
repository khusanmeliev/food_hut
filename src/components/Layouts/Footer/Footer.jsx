import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../../Button/Button";
import Heading from "../../Heading/Heading";
import { Input } from "../../Input/Input";
import Text from "../../Text/Text";
import { Box, FooterWrapper, Lists, Message, SocialMedias } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box>
        <SocialMedias>
          <Heading size="32px" style={{ fontWeight: "600px" }}>
            Foodhut
          </Heading>
          <Text size="18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </Text>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </SocialMedias>
        <Lists>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>Service Us</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>

          <ul>
            <li>Company</li>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </Lists>
        <Message>
          <Heading size="32px" style={{ fontWeight: "600" }}>
            Get In Touch
          </Heading>
          <Text size="18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <ul>
            <Input placeholder="Email" borderRadius="38px" />
            <Button backgroundColor>Subscribe</Button>
          </ul>
        </Message>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
