import styled from "styled-components";
import { COLORS } from "../../../assets/styles/colors";
import mobile from "../../../assets/styles/size";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";

export const FooterWrapper = styled.div`
  padding: 100px 100px 40px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 1000px) {
    padding: 80px 30px 30px;
  }

  @media (max-width: 600px) {
    padding: 60px 25px 30px;
  }
`;

export const FooterColumnsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const SocialMedias = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  ${mobile.lg} {
    width: 100%;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: 30px;
  color: ${COLORS.red};
  margin-bottom: 25px;
`;

export const FooterText = styled(Text)`
  width: 60%;
  font-size: 16px;

  ${mobile.lg} {
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  path {
    color: #fdc55e;
  }
`;

export const LinksWrapper = styled.div`
  width: 30%;
  display: flex;
  gap: 30px;

  ${mobile.lg} {
    width: 100%;
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  :nth-child(2) {
    margin: 0px 20px;
  }
`;

export const ColumnTitle = styled.h1`
  font-weight: 600;
  color: ${COLORS.red};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 25px;
`;

export const ColumnText = styled(Text)`
  font-size: 16px;
`;

export const FooterLink = styled.a`
  list-style-type: none;
  color: ${({ theme }) => theme.text};
`;

export const MessageWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  ${mobile.lg} {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
`;

export const Input = styled.input`
  border-radius: 38px;
  background-color: #e6e6e6;
  border: none;
  text-indent: 8px;
  outline: none;
`;

export const CopyrightText = styled(Text)`
  opacity: 0.8;
  font-size: 14px;
  text-align: center;
`;
