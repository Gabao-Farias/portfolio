declare type SVGIconProps = {
  color?: ColorThemeKeys;
  color1?: ColorThemeKeys;
  /**
   * Not all SVGs will support, be aware if the SVG that you are using supports this!
   */
  linearGradient?: {
    startColor?: ColorThemeKeys;
    stopColor?: ColorThemeKeys;
  };
  size?: number;
};

declare type SVGAnimationProps = SVGIconProps;
