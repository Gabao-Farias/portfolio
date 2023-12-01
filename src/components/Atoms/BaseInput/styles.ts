import { getThemeByPath } from "@/utils";
import styled from "styled-components";
import { BaseInputProps } from "./types";

/**
 * Didn't want to use it, but spotted some weird behavior on ios's safari when the background color
 * is set to invisible...
 */
const defaultMinHeight = 16;

const typographyFontSize = ({ theme, variant }: BaseInputProps) =>
  getThemeByPath(`typography.${variant}.fontSize` as AppThemeKeys)({ theme });

const typographyFontWeight = ({ theme, variant }: BaseInputProps) =>
  getThemeByPath(`typography.${variant}.fontWeight` as AppThemeKeys)({ theme });

const handleTextColor = ({
  theme,
  textColor = "colors.environment.textContrast",
}: BaseInputProps) => getThemeByPath(textColor)({ theme });

const handlePlaceholderColor = ({
  theme,
  textColor = "colors.environment.textContrast",
}: BaseInputProps) => `${getThemeByPath(textColor)({ theme })}88`;

export const BaseInput = styled.input<BaseInputProps>`
  background-color: #0000;
  min-height: ${defaultMinHeight}px;
  width: 100%;
  font-weight: ${typographyFontWeight};
  font-size: ${typographyFontSize}rem;
  color: ${handleTextColor};
  text-align: left;

  &::placeholder {
    font-weight: ${typographyFontWeight};
    font-size: ${typographyFontSize}rem;
    color: ${handlePlaceholderColor};
  }
`;
