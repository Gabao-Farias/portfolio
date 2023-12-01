import { DefaultTheme } from "styled-components";

export type BaseInputProps = {
  placeholder?: string;
  value?: string;
  variant?: TypographyVariantKeys;
  theme?: DefaultTheme;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: InputTypes;
  textColor?: ColorThemeKeys;
  placeholderColor?: ColorThemeKeys;
  mask?: InputMasks;
};

/**
 * Types extracted from https://www.w3schools.com/html/html_form_input_types.asp.
 */
export type InputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

/**
 * Unofficial alternative input types.
 */
export type AlternativeInputTypes = "select";

export type InputMasks =
  | "cpf"
  | "phone"
  | "cep"
  | "onlyNumbers"
  | "onlyLetters";

export type InputMasksGenericMapper<T = string> = {
  [x in InputMasks]: T;
};
