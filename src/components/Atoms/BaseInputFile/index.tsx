import React, { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { BaseInput } from "./styles";

type BaseInputFileProps = {
  field?: ControllerRenderProps<FieldValues, any>;
  multiple?: boolean;
};

const BaseInputFile: FC<BaseInputFileProps> = ({ field, multiple }) => {
  const [value, setValue] = React.useState("");

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);

    if (field && field.onChange) {
      field.onChange(e.target.files);
    }
  };

  return (
    <BaseInput
      type="file"
      value={value}
      onChange={handleOnChange}
      multiple={multiple}
    />
  );
};

export default BaseInputFile;
