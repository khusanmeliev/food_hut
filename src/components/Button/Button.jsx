import React from "react";
import ButtonWrapper from "./styles";

const Button = ({ props, className, children }) => {
  return (
    <ButtonWrapper className={className} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
