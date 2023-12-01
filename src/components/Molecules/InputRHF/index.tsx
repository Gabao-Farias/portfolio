import { BaseInputFile, BaseInputRHF, If, Select } from "@/components/Atoms";
import {
  AlternativeInputTypes,
  InputMasks,
  InputTypes,
} from "@/components/Atoms/BaseInput/types";
import { SelectableOption } from "@/components/Atoms/Select/types";
import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import {
  Description,
  DescriptionWrapper,
  InputWrapper,
  Label,
  LabelWrapper,
  Wrapper,
} from "./styles";

type InputProps = {
  label?: string;
  description?: string;
  generalColor?: ColorThemeKeys;
  labelVariant?: TypographyVariantKeys;
  id?: string;
  type?: InputTypes | AlternativeInputTypes;
  placeholder?: string;
  field: ControllerRenderProps<FieldValues, any>;
  /**
   * Used only when the input type is 'select'.
   */
  selectableOptions?: SelectableOption[];
  mask?: InputMasks;
  multiple?: boolean;
  maxWidth?: number;
  disabled?: boolean;
};

const InputRHF: React.FC<InputProps> = ({
  label = "Label",
  description,
  id,
  labelVariant = "paragraph",
  generalColor = "colors.environment.textContrast",
  placeholder,
  type,
  field,
  selectableOptions,
  mask,
  multiple,
  maxWidth,
  disabled,
}) => {
  field.disabled = disabled;

  return (
    <Wrapper id={id} style={{ maxWidth }}>
      <LabelWrapper>
        <Label textColor={generalColor} variant={labelVariant}>
          {label}
        </Label>

        <If condition={!!description}>
          <DescriptionWrapper>
            <Description textColor={generalColor} variant={labelVariant}>
              {description}
            </Description>
          </DescriptionWrapper>
        </If>
      </LabelWrapper>
      <InputWrapper borderColor={generalColor}>
        <If condition={type !== "file" && type !== "select"}>
          <BaseInputRHF
            placeholder={placeholder}
            mask={mask}
            field={field}
            type={type as InputTypes}
          />
        </If>

        <If condition={type === "file"}>
          <BaseInputFile field={field} multiple={multiple} />
        </If>

        <If condition={type === "select"}>
          <Select
            placeholder={placeholder}
            selectableOptions={selectableOptions}
            field={field}
          />
        </If>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputRHF;
