import { Typography } from "@/components/Atoms";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type WrapperProps = {
  bckColor?: ColorThemeKeys;
};

const defaultCardWidth = 220;
const defaultCardHeight = 260;
const defaultCardWidthMobile = 180;
const defaultCardHeightMobile = 220;

export const defaultIconSize = 40;

const tablet = getThemeByPath("breakpoints.tablet");

const shortSpacing = getThemeByPath("spacings.short");
const mediumSpacing = getThemeByPath("spacings.medium");

const largeRadius = getThemeByPath("radius.large");

const shadowS3 = getThemeByPath("shadows.s3");

const handleBckColor = ({ bckColor = "colors.primary.main" }: WrapperProps) => {
  return getThemeByPath(bckColor);
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  width: ${defaultCardWidth}px;
  height: ${defaultCardHeight}px;

  border-radius: ${largeRadius}px;
  padding: ${mediumSpacing}px;
  background-color: ${handleBckColor};

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};

  @media (max-width: ${tablet}px) {
    width: ${defaultCardWidthMobile}px;
    height: ${defaultCardHeightMobile}px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${shortSpacing}px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${shortSpacing}px;
`;

export const Title = styled(Typography)`
  font-weight: 700;
`;

export const LabelWrapper = styled.div`
  margin-top: ${shortSpacing}px;
`;

export const Label = styled(Typography)``;
