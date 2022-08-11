import React from "react";
import ButtonWrapper from "./styles";

const Button = ({ props, children }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
