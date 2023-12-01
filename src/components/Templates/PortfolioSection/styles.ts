import { Typography } from "@/components";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const mediumSpacing = getThemeByPath("spacings.medium");
const insaneSpacing = getThemeByPath("spacings.insane");

export const Wrapper = styled.div`
  margin-top: ${insaneSpacing}px;
  min-height: 100vh;
`;

export const TitleWrapper = styled.div``;

export const Title = styled(Typography).attrs({
  variant: "headline2",
  textColor: "colors.primary.main",
})``;

export const DescriptionWrapper = styled.div`
  margin-top: ${mediumSpacing}px;
`;

export const Description = styled(Typography).attrs({
  variant: "header",
  textColor: "colors.environment.textContrast",
})``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PortfolioExternalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${insaneSpacing}px;
`;

export const ProjectCardItem = styled.div`
  margin: ${mediumSpacing}px;
`;
