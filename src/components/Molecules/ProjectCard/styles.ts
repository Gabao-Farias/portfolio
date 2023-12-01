import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const smallSpacing = getThemeByPath("spacings.small");
const mediumSpacing = getThemeByPath("spacings.medium");
const breakpointTablet = getThemeByPath("breakpoints.tablet");
const mediumRadius = getThemeByPath("radius.medium");
const shadowS3 = getThemeByPath("shadows.s3");

const primaryMain = getThemeByPath("colors.primary.main");

const environmentLighter = getThemeByPath("colors.environment.lighter");

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 400px;
  height: 520px;
  border-radius: ${mediumRadius}px;
  overflow: hidden;

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};

  transition: 300ms;

  @media (max-width: ${breakpointTablet}px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${environmentLighter};
  padding: ${mediumSpacing}px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
  margin-top: ${smallSpacing}px;
`;

export const SubtitleWrapper = styled.div`
  margin-top: ${smallSpacing}px;
`;

export const TechsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TechItemWrapper = styled.div``;

export const TechBadge = styled.img`
  margin-top: ${smallSpacing}px;
`;
