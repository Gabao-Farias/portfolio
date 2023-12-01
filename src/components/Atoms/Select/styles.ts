import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type SelectBaseProps = {
  textVariant?: TypographyVariantKeys;
  textColor?: ColorThemeKeys;
  theme: AppTheme;
};

const typographyFontSize = ({ theme, textVariant }: SelectBaseProps) =>
  getThemeByPath(`typography.${textVariant}.fontSize` as AppThemeKeys)({
    theme,
  });

const typographyFontWeight = ({ theme, textVariant }: SelectBaseProps) =>
  getThemeByPath(`typography.${textVariant}.fontWeight` as AppThemeKeys)({
    theme,
  });

const handleTextColor = ({
  theme,
  textColor = "colors.environment.textContrast",
}: SelectBaseProps) => getThemeByPath(textColor)({ theme });

const handlePlaceholderColor = ({
  theme,
  textColor = "colors.environment.textContrast",
}: SelectBaseProps) => `${getThemeByPath(textColor)({ theme })}44`;

export const Wrapper = styled.div``;

export const SelectBase = styled.select<SelectBaseProps>`
  width: 100%;
  color: ${handleTextColor};

  font-weight: ${typographyFontWeight};
  font-size: ${typographyFontSize}rem;

  &::placeholder {
    font-weight: ${typographyFontWeight};
    font-size: ${typographyFontSize}rem;
    color: ${handlePlaceholderColor};
  }
`;

export const OptionBase = styled.option``;
