import React, { FC } from "react";
import { MASKS } from "./masks";
import { BaseInput } from "./styles";
import { BaseInputProps } from "./types";

const Input: FC<BaseInputProps> = ({
  placeholder = "Placeholder",
  value = "",
  variant = "paragraph",
  onChange,
  textColor,
  mask,
  ...rest
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    if (!mask) {
      onChange(e);
      return;
    }

    const eMasked: React.ChangeEvent<HTMLInputElement> = e;
    eMasked.target.value = MASKS[mask](eMasked.target.value);

    onChange(eMasked);
  };

  return (
    <BaseInput
      placeholder={placeholder}
      value={value}
      variant={variant}
      textColor={textColor}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

export default Input;
