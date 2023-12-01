import { getThemeByPath } from "@/utils";
import styled from "styled-components";

type PathProps = {
  fillColor?: ColorThemeKeys;
};

const handleFillColor = ({ fillColor = "colors.primary.main" }: PathProps) =>
  getThemeByPath(fillColor);

export const Path = styled.path<PathProps>`
  fill: ${handleFillColor};
`;

export const Rect = styled.rect<PathProps>`
  fill: ${handleFillColor};
`;
