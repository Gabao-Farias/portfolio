import { SVGIconKeys, SVGIcons } from "@/assets";
import { FC } from "react";
import {
  IconWrapper,
  Label,
  LabelWrapper,
  Title,
  TitleWrapper,
  Wrapper,
  defaultIconSize,
} from "./styles";

export type InfoCardProps = {
  title?: string;
  titleColor?: ColorThemeKeys;
  titleVariant?: TypographyVariantKeys;
  label?: string;
  labelVariant?: TypographyVariantKeys;
  id?: string;
  bckColor?: ColorThemeKeys;
  txtColor?: ColorThemeKeys;
  icon?: SVGIconKeys;
};

const InfoCard: FC<InfoCardProps> = ({
  title = "Title",
  titleColor = "colors.primary.textContrast",
  titleVariant = "header",
  label = "Label",
  id,
  labelVariant = "paragraph",
  bckColor = "colors.primary.main",
  txtColor = "colors.primary.textContrast",
  icon = "application",
}) => {
  const Icon = SVGIcons[icon];
  return (
    <Wrapper id={id} bckColor={bckColor}>
      <IconWrapper>
        <Icon size={defaultIconSize} color="colors.primary.textContrast" />
      </IconWrapper>

      <TitleWrapper>
        <Title textColor={titleColor} variant={titleVariant}>
          {title}
        </Title>
      </TitleWrapper>

      <LabelWrapper>
        <Label textColor={txtColor} variant={labelVariant}>
          {label}
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
};

export default InfoCard;
