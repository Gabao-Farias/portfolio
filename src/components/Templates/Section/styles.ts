import { Typography } from "@/components";
import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type InnerContentWrapperProps = {
  invertSide?: boolean;
};

const mediumSpacing = getThemeByPath("spacings.medium");
const bigSpacing = getThemeByPath("spacings.big");
const insaneSpacing = getThemeByPath("spacings.insane");

const tablet = getThemeByPath("breakpoints.tablet");

const handleFlexDirection = ({ invertSide }: InnerContentWrapperProps) => {
  return invertSide ? "column-reverse" : "column";
};

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  margin: ${bigSpacing}px 0;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const SeparatorMargin = styled.div`
  margin-right: ${bigSpacing}px;

  @media (max-width: ${tablet}px) {
    margin-right: 0;
    margin-top: ${bigSpacing}px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InnerContentWrapper = styled.div<InnerContentWrapperProps>`
  display: flex;
  align-items: center;

  @media (max-width: ${tablet}px) {
    flex-direction: ${handleFlexDirection};
  }
`;

export const PresentationTextWrapper = styled.div`
  margin-top: ${mediumSpacing}px;
`;

export const PresentationTitle = styled(Typography).attrs({
  variant: "headline2",
  textColor: "colors.primary.main",
})``;

export const PresentationText = styled(Typography).attrs({
  variant: "header",
})``;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
  height: 500px;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${insaneSpacing}px;
`;
