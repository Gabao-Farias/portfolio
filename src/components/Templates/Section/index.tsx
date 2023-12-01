import { Button, ContentPadder, WidthLimiter } from "@/components";
import { FC, PropsWithChildren } from "react";
import {
  ButtonWrapper,
  ContentWrapper,
  InnerContentWrapper,
  PresentationText,
  PresentationTextWrapper,
  PresentationTitle,
  PresentationWrapper,
  SeparatorMargin,
  SideWrapper,
  Wrapper,
} from "./styles";

type Props = {
  title: string;
  text: string;
  buttonLabel: string;
  invertSide?: boolean;
  onPress?: () => void;
  id?: string;
};

const Section: FC<PropsWithChildren<Props>> = ({
  text,
  title,
  buttonLabel,
  children,
  onPress,
  invertSide = false,
  id = "",
}) => {
  if (invertSide) {
    return (
      <Wrapper id={id}>
        <ContentPadder>
          <ContentWrapper>
            <WidthLimiter>
              <InnerContentWrapper invertSide={invertSide}>
                <SideWrapper>{children}</SideWrapper>

                <SeparatorMargin />

                <SideWrapper>
                  <PresentationWrapper>
                    <PresentationTitle>{title}</PresentationTitle>
                    <PresentationTextWrapper>
                      <PresentationText>{text}</PresentationText>
                    </PresentationTextWrapper>
                    <ButtonWrapper>
                      <Button
                        labelVariant="headline6"
                        label={buttonLabel}
                        bckColor="colors.primary.main"
                        onClick={onPress}
                      />
                    </ButtonWrapper>
                  </PresentationWrapper>
                </SideWrapper>
              </InnerContentWrapper>
            </WidthLimiter>
          </ContentWrapper>
        </ContentPadder>
      </Wrapper>
    );
  }

  return (
    <Wrapper id={id}>
      <ContentPadder>
        <ContentWrapper>
          <WidthLimiter>
            <InnerContentWrapper invertSide={invertSide}>
              <SideWrapper>
                <PresentationWrapper>
                  <PresentationTitle>{title}</PresentationTitle>
                  <PresentationTextWrapper>
                    <PresentationText>{text}</PresentationText>
                  </PresentationTextWrapper>
                  <ButtonWrapper>
                    <Button
                      labelVariant="headline6"
                      label={buttonLabel}
                      bckColor="colors.primary.main"
                      onClick={onPress}
                    />
                  </ButtonWrapper>
                </PresentationWrapper>
              </SideWrapper>

              <SeparatorMargin />

              <SideWrapper>{children}</SideWrapper>
            </InnerContentWrapper>
          </WidthLimiter>
        </ContentWrapper>
      </ContentPadder>
    </Wrapper>
  );
};

export default Section;
