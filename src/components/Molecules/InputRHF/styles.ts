import { Typography } from "@/components/Atoms";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type InputWrapperProps = {
  borderColor?: ColorThemeKeys;
};

const smallRadius = getThemeByPath("radius.small");
const shortSpacing = getThemeByPath("spacings.short");
const smallSpacing = getThemeByPath("spacings.small");

const handleBorderColor = ({ borderColor }: InputWrapperProps) => {
  return getThemeByPath(borderColor || "colors.environment.textContrast");
};

export const Wrapper = styled.div``;

export const LabelWrapper = styled.div`
  margin-bottom: ${smallSpacing}px;
`;

export const Label = styled(Typography)`
  font-weight: 700;
`;

export const DescriptionWrapper = styled.div``;

export const Description = styled(Typography)``;

export const InputWrapper = styled.div<InputWrapperProps>`
  border: solid 2px ${handleBorderColor};
  border-radius: ${smallRadius}px;
  padding: ${shortSpacing}px;
`;
