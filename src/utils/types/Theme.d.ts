declare type ColorSetVariantKeys =
  | "darker"
  | "main"
  | "lighter"
  | "disabled"
  | "textContrast"
  | "neutral1";

/**
 * Variants to define a color set based on primary, secondary,..., n-ary color.
 */
declare type ColorSetVariant = {
  [x in ColorSetVariantKeys]?: string;
};

declare type ColorVariantKeys =
  | "error"
  | "warning"
  | "success"
  | "info"
  | "text"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "environment";

/**
 * Color theme used on color theme app.
 */
declare type ColorTheme = {
  [x in ColorVariantKeys]?: ColorSetVariant;
};

/**
 * Defines default choosable color theme in app.
 */
declare type SystemThemeDefaultOptions = "light" | "dark";

/**
 * Defines default choosable color theme in app.
 */
declare type ColorThemeDefaultOptions = "light" | "dark";

/**
 * Shadow variants.
 */
declare type ShadowVariantsKeys = "s1" | "s2" | "s3";

/**
 * Shadows theme.
 */
declare type ShadowTheme = {
  [variant in ShadowVariantsKeys]: string;
};

/**
 * In case of app have multiple choosable color themes.
 */
declare type ColorThemes = {
  [variant: string]: ColorTheme;
};

declare type ZIndexVariantKeys =
  | "layer0"
  | "layer1"
  | "layer2"
  | "layer3"
  | "layer4"
  | "layer5";

declare type ZIndexTheme = {
  [x in ZIndexVariantKeys]: number;
};

/**
 * Default breakpoints variants
 */
declare type BreakpointVariantKeys =
  | "mobile"
  | "mobileWider"
  | "tablet"
  | "laptop"
  | "largeLaptop"
  | "fhd";

declare type Breakpoints = {
  [breakpoint in BreakpointVariantKeys]: number;
};

/**
 * Variations for sizes.
 */
declare type SizesVariantKeys =
  | "insane"
  | "huge"
  | "giant"
  | "big"
  | "large"
  | "medium"
  | "short"
  | "small"
  | "smaller"
  | "meaningless";

/**
 * Relation between variations and it's sizes.
 */
declare type SizeVariantValue = {
  [variant in SizesVariantKeys]: number;
};

/**
 * Spacings that can be used in margins or paddings.
 */
declare type Spacings = SizeVariantValue;

/**
 * Radis sizes.
 */
declare type Radiuses = SizeVariantValue;

/**
 * Font sizes.
 */
declare type FontSizes = SizeVariantValue;

/**
 * The actual theme type being used on application, or the type for the current theme in use.
 */
declare type AppTheme = {
  breakpoints: Breakpoints;
  colors: ColorTheme;
  radius: Radiuses;
  spacings: Spacings;
  typography: TypographyVariantKeysGenericMapper<TypographyAttributes>;
  zIndex: ZIndexTheme;
  shadows: ShadowTheme;
};

declare type BreakpointsThemeKeys = `breakpoints.${BreakpointVariantKeys}`;
declare type ColorThemeKeys =
  `colors.${ColorVariantKeys}.${ColorSetVariantKeys}`;
declare type RadiusThemeKeys = `radius.${SizesVariantKeys}`;
declare type SpacingsThemeKeys = `spacings.${SizesVariantKeys}`;
declare type TypographyThemeKeys =
  `typography.${TypographyVariantKeys}.${TypographyAttributesKeys}`;
declare type ZIndexThemeKeys = `zIndex.${ZIndexVariantKeys}`;
declare type ShadowsThemeKeys = `shadows.${ShadowVariantsKeys}`;

declare type AppThemeKeys =
  | BreakpointsThemeKeys
  | ColorThemeKeys
  | RadiusThemeKeys
  | SpacingsThemeKeys
  | TypographyThemeKeys
  | ZIndexThemeKeys
  | ShadowsThemeKeys;
