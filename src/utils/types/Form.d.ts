declare type FormTemplateData<NameType = string> = {
  /**
   * This is the field that goes to 'name' field on controller on React Hook Form.
   */
  name: NameType;
  label: string;
  inputType?: InputTypes | AlternativeInputTypes;
  placeholder?: string;
  selectableOptions?: SelectableOption[];
  mask?: InputMasks;
};

declare type FormDataRender<T = string> = {
  name: T;
  label: string;
  description?: string;
  type?: InputTypes | AlternativeInputTypes;
  mask?: InputMasks;
  placeholder?: string;
  selectOptions?: SelectableOption[];
  disabled?: boolean;
};
