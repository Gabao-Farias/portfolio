declare type TypographyVariantKeys =
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6"
  | "paragraph"
  | "header"
  | "footer";

declare type TypographyAttributesKeys = "fontSize" | "fontWeight";

declare type TypographyAttributes = {
  /**
   * Use this number in `rem`
   */
  [x in TypographyAttributesKeys]: number;
};

declare type TypographyVariantKeysGenericMapper<ReturnType = string> = {
  [variant in TypographyVariantKeys]: ReturnType;
};

declare type TypographyTextDecorationKeys =
  | "dashed"
  | "dotted"
  | "line-through"
  | "none"
  | "overline"
  | "solid"
  | "underline"
  | "wavy";
