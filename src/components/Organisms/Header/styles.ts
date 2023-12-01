import { Typography } from "@/components";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const environmentTextContrast = getThemeByPath(
  "colors.environment.textContrast"
);

const mediumSpacing = getThemeByPath("spacings.medium");

export const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const LogoWrapper = styled.div``;

export const LinksWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${mediumSpacing}px;
`;

export const LinkItem = styled.div`
  margin: ${mediumSpacing}px;
`;

export const Link = styled.a`
  color: ${environmentTextContrast};
  text-decoration: none;
`;

export const LinkText = styled(Typography).attrs({
  variant: "headline6",
})``;

export const ThemeSwitchWrapper = styled.div``;
