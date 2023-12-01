import React, { FC, PropsWithChildren } from "react";
import {
  Footer,
  Header,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Paragraph,
} from "./styles";

type Props = {
  typographyProps?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
  variant?: TypographyVariantKeys;
  textColor?: ColorThemeKeys;
  decoration?: TypographyTextDecorationKeys;
};

const Typography: FC<PropsWithChildren<Props>> = ({
  children,
  typographyProps,
  variant = "paragraph",
  textColor = "colors.environment.textContrast",
  ...rest
}) => {
  const typographyComponents: TypographyVariantKeysGenericMapper<JSX.Element> =
    {
      paragraph: (
        <Paragraph textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Paragraph>
      ),
      headline1: (
        <Headline1 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline1>
      ),
      headline2: (
        <Headline2 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline2>
      ),
      headline3: (
        <Headline3 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline3>
      ),
      headline4: (
        <Headline4 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline4>
      ),
      headline5: (
        <Headline5 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline5>
      ),
      headline6: (
        <Headline6 textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Headline6>
      ),
      footer: (
        <Footer textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Footer>
      ),
      header: (
        <Header textColor={textColor} {...typographyProps} {...rest}>
          {children}
        </Header>
      ),
    };

  return typographyComponents[variant];
};

export default Typography;
