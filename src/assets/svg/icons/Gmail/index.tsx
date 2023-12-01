import React from "react";
import { Path } from "./styles";

const GMail: React.FC<SVGIconProps> = ({
  color = "colors.primary.textContrast",
  size = 64,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <Path
      d="M53.3334 48H48V24.6667L32 34.6667L16 24.6667V48H10.6667V16H13.8667L32 27.3334L50.1334 16H53.3334M53.3334 10.6667H10.6667C7.70671 10.6667 5.33337 13.04 5.33337 16V48C5.33337 49.4145 5.89528 50.7711 6.89547 51.7713C7.89566 52.7715 9.25222 53.3334 10.6667 53.3334H53.3334C54.7479 53.3334 56.1044 52.7715 57.1046 51.7713C58.1048 50.7711 58.6667 49.4145 58.6667 48V16C58.6667 13.04 56.2667 10.6667 53.3334 10.6667Z"
      fillColor={color}
    />
  </svg>
);

export default GMail;
