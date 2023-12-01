import { Typography } from "@/components/Atoms";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type WrapperProps = {
  bckColor?: ColorThemeKeys;
};

const shortSpacing = getThemeByPath("spacings.short");

const bigSpacing = getThemeByPath("spacings.big");

const shadowS3 = getThemeByPath("shadows.s3");

const handleBckColor = ({ bckColor = "colors.primary.main" }: WrapperProps) => {
  return getThemeByPath(bckColor);
};

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  border-radius: 999px;
  padding: ${shortSpacing}px ${bigSpacing}px;
  background-color: ${handleBckColor};

  align-items: center;
  justify-content: center;

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled(Typography)``;
