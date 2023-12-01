import React, { FC } from "react";
import { Label, Wrapper } from "./styles";

export type ButtonProps = {
  label?: string;
  labelVariant?: TypographyVariantKeys;
  id?: string;
  key?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bckColor?: ColorThemeKeys;
  txtColor?: ColorThemeKeys;
};

const Button: FC<ButtonProps> = ({
  label = "Label",
  id,
  key,
  labelVariant = "paragraph",
  onClick,
  bckColor = "colors.primary.main",
  txtColor = "colors.primary.textContrast",
}) => {
  return (
    <Wrapper onClick={onClick} id={id} key={key} bckColor={bckColor}>
      <Label textColor={txtColor} variant={labelVariant}>
        {label}
      </Label>
    </Wrapper>
  );
};

export default Button;
