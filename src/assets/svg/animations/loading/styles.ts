import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type PathProps = {
  fillColor?: ColorThemeKeys;
};

const handleFillColor = ({ fillColor = "colors.primary.main" }: PathProps) =>
  getThemeByPath(fillColor);

export const Svg = styled.svg`
  margin: auto;
  background-color: none;
  display: block;
  shape-rendering: auto;
`;

export const Circle = styled.circle<PathProps>`
  stroke: ${handleFillColor};
`;
