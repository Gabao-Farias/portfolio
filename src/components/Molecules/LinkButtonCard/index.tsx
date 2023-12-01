import { SVGIconKeys, SVGIcons } from "@/assets";
import { FC } from "react";
import {
  IconWrapper,
  LinkCardTitle,
  LinkCardTitleWrapper,
  LinkCardWrapper,
} from "./styles";

export type Socials = {
  icon: SVGIconKeys;
  btnText: string;
  href?: string;
  preventDefaultOnClick?: boolean;
  onClick?: () => void;
  size?: number;
};

const LinkButtonCard: FC<Socials> = ({
  icon,
  btnText,
  href,
  onClick,
  preventDefaultOnClick,
  size = 36,
}) => {
  const Icon = SVGIcons[icon];

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (preventDefaultOnClick) e.preventDefault();

    if (onClick) onClick();
  };

  return (
    <LinkCardWrapper href={href} onClick={handleClick}>
      <IconWrapper>
        <Icon size={size} />
      </IconWrapper>
      <LinkCardTitleWrapper>
        <LinkCardTitle>{btnText}</LinkCardTitle>
      </LinkCardTitleWrapper>
    </LinkCardWrapper>
  );
};

export default LinkButtonCard;
