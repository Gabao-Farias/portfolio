import { GabaoArtBck } from "@/assets";
import { Typography } from "@/components";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const mediumSpacing = getThemeByPath("spacings.medium");
const bigSpacing = getThemeByPath("spacings.big");
const insaneSpacing = getThemeByPath("spacings.insane");

const tablet = getThemeByPath("breakpoints.tablet");

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-right: ${bigSpacing}px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const PresentationTextWrapper = styled.div`
  margin-top: ${mediumSpacing}px;
`;

export const PresentationTitle = styled(Typography).attrs({
  variant: "headline1",
  textColor: "colors.primary.main",
})``;

export const PresentationText = styled(Typography).attrs({
  variant: "header",
})``;

export const BoldPresentationText = styled.b`
  color: inherit;
  font-size: inherit;
  font-weight: bold;
  text-decoration: inherit;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  width: 100%;
`;

export const Gabao = styled(GabaoArtBck)`
  width: 100%;
  height: 440px;

  @media (max-width: ${tablet}px) {
    height: 250px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${insaneSpacing}px;
`;

export const InnerContentWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: ${tablet}px) {
    flex-direction: column-reverse;
  }
`;
