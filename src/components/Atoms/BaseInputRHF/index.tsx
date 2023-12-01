import React, { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { MASKS } from "../BaseInput/masks";
import { InputMasks, InputTypes } from "../BaseInput/types";
import { BaseInput } from "./styles";

export type BaseInputRHFProps = {
  placeholder?: string;
  variant?: TypographyVariantKeys;
  textColor?: ColorThemeKeys;
  mask?: InputMasks;
  field?: ControllerRenderProps<FieldValues, any>;
  type?: InputTypes;
};

const BaseInputRHF: FC<BaseInputRHFProps> = ({
  placeholder = "Placeholder",
  variant = "paragraph",
  textColor = "colors.environment.textContrast",
  mask,
  field,
  type,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eBiased: React.ChangeEvent<HTMLInputElement> = e;

    if (mask) {
      eBiased.target.value = MASKS[mask](eBiased.target.value);
    }

    if (field) {
      field.onChange(eBiased);
    }
  };

  return (
    <BaseInput
      placeholder={placeholder}
      variant={variant}
      textColor={textColor}
      type={type}
      {...field}
      onChange={onChangeHandler}
    />
  );
};

export default BaseInputRHF;
