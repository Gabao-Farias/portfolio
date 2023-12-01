import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const smallSpacing = getThemeByPath("spacings.small");
const mediumRadius = getThemeByPath("radius.medium");

const shadowS3 = getThemeByPath("shadows.s3");

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: ${mediumRadius}px;

  box-shadow: ${shadowS3};
  -webkit-box-shadow: ${shadowS3};
  -moz-box-shadow: ${shadowS3};
`;

export const DownloadCVWrapper = styled.div`
  margin-top: ${smallSpacing}px;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonSeparator = styled.a`
  margin: ${smallSpacing}px;
  margin-left: 0;

  text-decoration: none;
`;
