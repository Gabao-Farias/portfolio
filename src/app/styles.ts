import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const tablet = getThemeByPath("breakpoints.tablet");

const primaryMain = getThemeByPath("colors.primary.main");

const mediumSpacing = getThemeByPath("spacings.medium");

const mediumRadius = getThemeByPath("radius.medium");

const shadowS3 = getThemeByPath("shadows.s3");

export const BizarreTitle = styled.h1`
  font-size: larger;
  color: ${primaryMain};
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardItemWrapper = styled.div`
  display: flex;
  margin: ${mediumSpacing}px;
`;

export const ImageWrapper = styled.div`
  height: 420px;
  width: 100%;
  overflow: hidden;
  border-radius: ${mediumRadius}px;

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};

  @media (max-width: ${tablet}px) {
    width: 80vw;
  }
`;
