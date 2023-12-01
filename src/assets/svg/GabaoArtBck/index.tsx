import { FC } from "react";
import { Mask, Path } from "./styles";

type Props = {
  width?: number | string;
  height?: number | string;
  color?: ColorThemeKeys;
};

const GabaoArtBck: FC<Props> = ({
  height = 1530,
  width = 1793,
  color,
  ...props
}: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1793 1530"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M1509.51 1515.5C1150.31 1557.5 549.511 1498 294.011 1463C107.611 1441.05 21.6777 1235.19 2.01105 1135C-18.3223 754.333 107.011 18.9 771.011 122.5C1435.01 226.1 1692.01 510.667 1737.51 640C1811.18 914.333 1868.71 1473.5 1509.51 1515.5Z"
      fillColor={color}
    />
    <Mask
      id="mask0_411_21"
      maskUnits="userSpaceOnUse"
      x="0"
      y="112"
      width="1793"
      height="1418"
    >
      <Path
        d="M1509.51 1515.5C1150.31 1557.5 549.511 1498 294.011 1463C107.611 1441.05 21.6777 1235.19 2.01105 1135C-18.3223 754.333 107.011 18.9 771.011 122.5C1435.01 226.1 1692.01 510.667 1737.51 640C1811.18 914.333 1868.71 1473.5 1509.51 1515.5Z"
        fillColor={color}
      />
    </Mask>
    <g mask="url(#mask0_411_21)">
      <rect x="332.011" width="1368" height="1536" fill="url(#pattern0)" />
    </g>
    <rect x="525.011" width="1175" height="1041" fill="url(#pattern1)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_411_21"
          transform="matrix(0.000730994 0 0 0.000651042 -0.571637 0)"
        />
      </pattern>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_411_21"
          transform="matrix(0.000851064 0 0 0.000960615 -0.829787 0)"
        />
      </pattern>
      <image
        id="image0_411_21"
        width="3072"
        height="1536"
      />
    </defs>
  </svg>
);

export default GabaoArtBck;