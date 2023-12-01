import { Typography } from "@/components";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const shadowS3 = getThemeByPath("shadows.s3");

const primaryMain = getThemeByPath("colors.primary.main");

const smallSpacing = getThemeByPath("spacings.small");

const mediumRadius = getThemeByPath("radius.medium");

const size = 110;

export const LinkCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${mediumRadius}px;

  height: ${size}px;
  width: ${size}px;

  text-decoration: none;

  background-color: ${primaryMain};

  padding: ${smallSpacing}px;

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};
`;

export const LinkCardTitle = styled(Typography).attrs({
  textColor: "colors.primary.textContrast",
})`
  font-weight: bold;
`;

export const IconWrapper = styled.div``;

export const LinkCardTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
