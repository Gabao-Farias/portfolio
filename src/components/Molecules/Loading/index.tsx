import { Loading as LoadingSVG } from "@/assets";
import React from "react";
import { IconWrapper, Wrapper } from "./styles";

type Props = {
  color?: ColorThemeKeys;
  size?: number;
};

const Loading: React.FC<Props> = ({ color, size = 64 }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <LoadingSVG size={size} color={color} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Loading;
