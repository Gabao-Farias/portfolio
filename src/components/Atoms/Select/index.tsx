import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { OptionBase, SelectBase } from "./styles";
import { SelectableOption } from "./types";

type InputProps = {
  generalColor?: ColorThemeKeys;
  id?: string;
  key?: string;
  placeholder?: string;
  textVariant?: TypographyVariantKeys;
  selectableOptions?: SelectableOption[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string;
  defaultValue?: string;
  field?: ControllerRenderProps<FieldValues, any>;
};

const Select: React.FC<InputProps> = ({
  id,
  key,
  placeholder,
  generalColor = "colors.environment.textContrast",
  textVariant = "paragraph",
  selectableOptions = [],
  defaultValue,
  onChange,
  value,
  field,
}) => {
  return (
    <SelectBase
      id={id}
      key={key}
      placeholder={placeholder}
      textVariant={textVariant}
      textColor={generalColor}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      {...field}
    >
      {selectableOptions.map(({ value, label }) => (
        <OptionBase key={label + value} value={value}>
          {label}
        </OptionBase>
      ))}
    </SelectBase>
  );
};

export default Select;
