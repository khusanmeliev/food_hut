import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../../Button/Button";
import {
  FooterWrapper,
  FooterColumnsWrapper,
  ColumnTitle,
  CopyrightText,
  FooterLink,
  FooterText,
  IconsWrapper,
  Input,
  InputWrapper,
  LinksColumn,
  LinksWrapper,
  MessageWrapper,
  SocialMedias,
  StyledHeading,
  ColumnText,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumnsWrapper>
        <SocialMedias>
          <StyledHeading>Foodhut</StyledHeading>
          <FooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </FooterText>
          <IconsWrapper>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </IconsWrapper>
        </SocialMedias>
        <LinksWrapper>
          <LinksColumn>
            <ColumnTitle>About Us</ColumnTitle>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Service Us</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Company</FooterLink>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink>Partnership</FooterLink>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Sitemap</FooterLink>
          </LinksColumn>
        </LinksWrapper>
        <MessageWrapper>
          <ColumnTitle>Get In Touch</ColumnTitle>
          <ColumnText>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor
          </ColumnText>
          <InputWrapper>
            <Input placeholder="Email" />
            <Button>Subscribe</Button>
          </InputWrapper>
        </MessageWrapper>
      </FooterColumnsWrapper>
      <CopyrightText>Copyright © 2022 Foodhut.</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
