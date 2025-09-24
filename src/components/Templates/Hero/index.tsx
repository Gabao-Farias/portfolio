import { Button, ContentPadder, Header } from "@/components";
import WidthLimiter from "@/components/Atoms/WidthLimiter";
import { FC } from "react";
import {
  BoldPresentationText,
  ButtonWrapper,
  ContentWrapper,
  Gabao,
  ImageWrapper,
  InnerContentWrapper,
  PresentationText,
  PresentationTextWrapper,
  PresentationTitle,
  PresentationWrapper,
  Wrapper,
} from "./styles";

type Props = {
  onClick?: () => void;
};

const Hero: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper>
      <Header />
      <ContentPadder>
        <ContentWrapper>
          <WidthLimiter>
            <InnerContentWrapper>
              <PresentationWrapper>
                <PresentationTitle>Hi, I&lsquo;m Gabão</PresentationTitle>
                <PresentationTextWrapper>
                  <PresentationText>
                    I&lsquo;m a <BoldPresentationText>fullstack developer</BoldPresentationText> focusing in delivering value by building in the back-end and front-end including web and mobile, and all this being powered by Javascript.
                  </PresentationText>
                </PresentationTextWrapper>
                <ButtonWrapper>
                  <Button
                    labelVariant="headline6"
                    label="Get in touch"
                    bckColor="colors.primary.main"
                    onClick={onClick}
                  />
                </ButtonWrapper>
              </PresentationWrapper>
              <ImageWrapper>
                <Gabao />
              </ImageWrapper>
            </InnerContentWrapper>
          </WidthLimiter>
        </ContentWrapper>
      </ContentPadder>
    </Wrapper>
  );
};

export default Hero;
