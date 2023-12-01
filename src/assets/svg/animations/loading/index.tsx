import React from 'react';
import { Circle, Svg } from './styles';

const Loading: React.FC<SVGAnimationProps> = ({
  color = 'colors.environment.textContrast',
  size = 64,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <Circle
      cx="50"
      cy="50"
      fill="none"
      fillColor={color}
      strokeWidth="10"
      r="30"
      strokeDasharray="141.37166941154067 49.12388980384689"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.8s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </Circle>
  </Svg>
);

export default Loading;
